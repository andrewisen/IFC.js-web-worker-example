# IFC.js

<a href="url"><img src="https://github.com/agviegas/IFC.js/blob/master/img/logo.jpg"  height="256" width="256" ></a>

This library converts any browser into an IFC viewer. It parses IFC entities to WebGL geometry through THREE.js.

## Try it

[Web Worker Example](https://github.andrewisen.se/ifc-web-worker/examples/web-worker/)

## Introduction

This repo is a fork of [agviegas/IFC.js](https://github.com/agviegas/IFC.js).
The purpose of this repo is to simply show some ways to use Web Workers.
I encourage you to experiment with this on your own - and do better than me!

I have two examples:

- A `Single Web Worker` Example
- A `Multi Web Worker `Example

If you are new to Web Workers, then please start with the `Single Web Worker` example.

## Single Web Worker Example

_This example is intended for beginners.
However, I will assume that you have some basic knowledge about JavaScript and IFC.js._

### What are Web Workers?

JavaScript is a single-threaded environment, meaning multiple scripts cannot run at the same time [(1)](https://www.html5rocks.com/en/tutorials/workers/basics/). However, `Web Workers` makes it possible to run a script operation in a background thread [(2)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

A `Web Worker` is a JavaScript script that runs in the background, independently of any other scripts, without affecting the performance of the page [(3)](https://www.w3schools.com/html/html5_webworkers.asp).

### What can Web Workers do?

`Web Workers` are a simple means for web content to run scripts in background threads. Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code [(4)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

### I don't understand...

It's okay. Check out: [https://www.w3schools.com/html/html5_webworkers.asp](https://www.w3schools.com/html/html5_webworkers.asp).

### How do I configure IFC.js to work with Web Workers?

Please note that `Web Workers` will not work straight out the box.

`Web Workers` use the [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) when you [post a message](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage).

Certain types, say `Functions`, are **NOT** supported by the [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). Therefore, we cannot build the entire `IFC Project` in a Web Worker.

### Why can't I build the entire IFC Project inside a Web Worker?

The `mainObject`, used in `src/ifc-project-builder/ifc-structure-builder.js`, contains some nasty stuff.
The [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) cannot deal with that type of object.

Also, it's hard to use Three inside a web worker.
See: [https://stackoverflow.com/a/52243600/14353202](https://stackoverflow.com/a/52243600/14353202)

### How do I solve this?

I purpose that we (yes, you and me) use a dirty trick.

Let's:

1. Start a `Web Worker`
2. Run `loadIfcFileItems()` as usual
3. Run `constructProject()` without the `mainObject`
4. Exit the `Web Worker`
5. Append the `mainObject` (outside of the Web Worker)
6. Build the geometry (outside of the Web Worker)

### Okay, so how do I actually do this?

I am glad you asked.

Take a look at `examples/web-worker/main.js`.

```javascript
function readFile(input) {
  const reader = new FileReader();
  reader.onload = () => {
    const ifcWorker = new Worker('worker.js');
    ifcWorker.postMessage(reader.result);
    ifcWorker.onmessage = function (e) {
      let structured = e.data; /
      structured.MainObject = mainObject;
      structured = buildGeometry(structured);
      scene.add(structured.MainObject);
    };
  };
  reader.readAsText(input.files[0]);
}
```

Notice how we use the `Web Worker` (line 5).
We `post` the FileReader result into the worker.
And, we get back the `structured` object (line 6).

Also, notice how we add back the mainObject in the snippet above.

Easy ey? :)

### A closer look at the Web Worker

The code inside the `Web Worker` is actually super easy:

```javascript
onmessage = (e) => {
  const ifcData = e.data;
  const loaded = IFCjs.loadIfcFileItems(ifcData);
  const structured = IFCjs.constructProject(loaded);
  postMessage(structured);
};
```

We simply mimic the beginning of the original `loadIfc` function, in `src/IFC.js`.

### Final Notes

Take a look at these commits:

- [Add Web Worker example](https://github.com/andrewisen/IFC.js-web-worker-example/commit/327abb2459a48fc468eabd1ee3b7a70c04fa6bba)
- [Add Config](https://github.com/andrewisen/IFC.js-web-worker-example/commit/f5d9ff76c9b90fa282eb88f1fc94b1bb3e8aa9e4)
- [Remove mainObject](https://github.com/andrewisen/IFC.js-web-worker-example/commit/d84a4864a8573c6d5cd2e67fef14439e701f453d)

Drop an issue if you have any questions :smile:

## Multi Web Worker Example - Multithreading using Web Workers

_This example is NOT intended for beginners.
I will assume that you have understood the `Single Web Worker` example._

If you are unsure how IFC works, then check out: [What is IFC?](https://bimwhale.gitbook.io/bim-whale/ifc/what-is-ifc)

### Background

A `single Web Worker` will not be enough for a large file, say > 20MB.
Yes, the `Web Worker` runs in the background. But it's synchronous code.

We can use `multiple` Web Workers build asynchronous code.

Check out: [Asynchronous Vs Synchronous Programming
](https://www.youtube.com/watch?v=Kpn2ajSa92c)

One might call this approach `multithreading` or `parallelizing`.
I really don't want to go into technicalities right now... but for the sake of simplicity.

Let's cal this approach: **Multithreading**.

This might be a new concept if you only worked with web development.
If you have a background with C, Java, Python, etc. than this will be easier to understand.

Anyways, let's continue!

### Prerequisites

- A modern Web Browser
- An understanding what multithreading is
- _Patience you must have, my young Padawan_

### Work with modern browsers

In order to do `multithreading` we need to do one thing:

> We need to spawn additional, descendant dedicated `Web Workers`.

Most modern browser should be able to do this... but not [Safari](https://www.chromestatus.com/feature/6080438103703552).
You can imagine my frustration since I work on a Mac.

Let's recall that we use [Babel](https://babeljs.io/docs/en/) to build our bundles.
In more detail, we use the [preset-env](https://babeljs.io/docs/en/babel-preset-env).

**This is where the fun begins:**
We can use the [Browserslist](https://github.com/browserslist/browserslist) integration.
Simply look at the `package.json` file.

```javascript
{
  ...
  "browserslist":"last 2 Chrome versions"
  ...
}
```

### What should we multithread?

First, we need to identify which parts are blocking our code.
The original code has three major parts:

1. loadIfcFileItems
2. constructProject
3. buildGeometry

```javascript
function loadIfc(ifcData) {
  const loaded = loadIfcFileItems(ifcData);
  const structured = constructProject(loaded);
  return buildGeometry(structured);
}
```

As we discussed earlier, we cannot build the geometry inside a web worker.
That leaves `loadIfcFileItems` and `constructProject`

Let's take a look at this picture:
![image](https://user-images.githubusercontent.com/31659443/105323168-1e038280-5bca-11eb-9102-07fed210b941.png)

Your eyes can deceive you, don't trust them.
Instead, trust the [Chrome DevTools Performance panel](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance).

We can see that `loadIfcFileItems` and `constructProject` takes roughly the same amount of time to compute.

### Wan can we multithread?

We must consider one thing.

> What can we parse independently of other IFC entities?

If you know your `A, B, and (IF)C`, then you realize that we cannot do that much.
The IFC schema realizes heavily on references to other entities.

Therefore, the only thing we can do is `loadIfcFileItems` independently.

### How do we load IFC file items independently?

The first thing we need to do is to split up the IFC into different parts.
One approach is to split the file itself into several parts. My approach is to split each `IfcType` into groups.

In layman's terms:

- Let's load all `properties` using one Web Worker
- Let's load all `materials` using one Web Worker
- Let's load all `building elements` using one Web Worker
- Let's load all `relationships` using one Web Worker
- etc. etc.

See `examples/web-worker/worker/utils/custom-ifc-types.js` for more info.

### How do we construct multiple Web Workers?

Now that we have figured out how to divide our IFC file, let's look at how we spawn our nested `Web Workers`.
Take a look at `examples/web-worker/worker/multi-worker.js`, on line 32:

```javascript
for (const [ifcTypesGroupName, ifcTypesGroup] of Object.entries(ifcTypesGroups)) {
  constructWebWorker(dataSection, ifcTypesGroupName, ifcTypesGroup);
}
```

A simple `for loop` will do the trick. Each `Web Worker` can work on its own.
Once its done, it will call the function `workerDone`.

```javascript
function workerDone(e) {
  const _loaded = e.data.loaded;
  Object.assign(loaded, _loaded);
  --running;
  if (running === 0) {
    // DO STUFF WHEN DONE
  }
}
```

The global variable `loaded` will store ALL the loaded data.
In other words: `loaded` will store the result from each web workers.

Since the Web Works parse different IfcTypes, the result will not conflict.

We can do a dirty and quick check to see if multiple `Web Workers` are running.

### Merging the result

We now have all the loaded data.
But, remember that we have used specific `Web Workers` to parse the loaded data.

> We are missing the references to other entities!

We can simply fix this by running this command AT THE END (!).

```javascript
IFCjs.referenceEntities(loaded);
```

Then its a matter of constructing the project like before.

```javascript
const structured = IFCjs.constructProject(loaded);
postMessage(structured);
```

### Final notes

This is a very dirty and simple approach.
Take a look at these commits for a general understanding of what I did.

- [Add Multi Web Worker](https://github.com/andrewisen/IFC.js-web-worker-example/commit/80f6ae3a4edc7b3474f15b2ae0364c1c86f3ca30)
- [Remove support for older browsers](https://github.com/andrewisen/IFC.js-web-worker-example/commit/5a09385f82a85b87ca636b07f5ad06ab31089bb7)

## Info

Forked from [199f78f230f84ffe4d9105deb38b0e033cc6b715](https://github.com/agviegas/IFC.js/tree/199f78f230f84ffe4d9105deb38b0e033cc6b715) (2021-01-19).

```

```

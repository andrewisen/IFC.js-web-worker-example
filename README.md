# IFC.js

<a href="url"><img src="https://github.com/agviegas/IFC.js/blob/master/img/logo.jpg"  height="256" width="256" ></a>

This library converts any browser into an IFC viewer. It parses IFC entities to WebGL geometry through THREE.js.

## Try it

[Web Worker Example](https://github.andrewisen.se/ifc-web-worker/examples/web-worker/)

## Introduction

This repo is a fork of [agviegas/IFC.js](https://github.com/agviegas/IFC.js).
The purpose of this repo is to simply show one way to use Web Workers.
I encourage you to experiment with this on your own.

### What are Web Workers?

JavaScript is a single-threaded environment, meaning multiple scripts cannot run at the same time [(1)](https://www.html5rocks.com/en/tutorials/workers/basics/). However, Web Workers makes it possible to run a script operation in a background thread [(2)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

A Web Worker is a JavaScript script that runs in the background, independently of any other scripts, without affecting the performance of the page [(3)](https://www.w3schools.com/html/html5_webworkers.asp).

### What can Web Workers do?

Web Workers are a simple means for web content to run scripts in background threads. Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code [(4)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

### I don't understand...

It's okay. Take look at this [video](https://youtu.be/BoLd3cMc0jQ?t=47) or check out [https://www.w3schools.com/html/html5_webworkers.asp](https://www.w3schools.com/html/html5_webworkers.asp).

### How do I configure IFC.js to work with Web Workers?

Please note that Web Workers will not work straight out the box.

Web Wokers use [The structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) when [Posting a message](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage).

Certain types, say Functions, are NOT supported by [The structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). Therefore, we cannot build the entire `IFC Project` in a Web Worker.

### Why can't I build the entire IFC Project inside a Web Worker?

The `mainObject`, used in `src/ifc-project-builder/ifc-structure-builder.js`, contains some nasty stuff.
The [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) cannot deal with that type of object.

Also, it's hard to use Three inside a web worker.
See: [https://stackoverflow.com/a/52243600/14353202](https://stackoverflow.com/a/52243600/14353202)

### How do I solve this?

I purpose that we (yes, you and me) use a dirty trick.

Let's:

1. Start a Web Worker
2. Run `loadIfcFileItems()` as usual
3. Run `constructProject()` without the `mainObject`
4. Exit the Web Worker
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

Notice how we use the Web Worker.
We `post` the FileReader result into the worker.
And, we get back the `structured` object.

Also, notice how we add back the mainObject in the snippet above.

Easy ey? :)

### A closer look at the Web Worker

The Web Worker is actually super easy:

```javascript
onmessage = (e) => {
  const ifcData = e.data;
  const loaded = IFCjs.loadIfcFileItems(ifcData);
  const structured = IFCjs.constructProject(loaded);
  postMessage(structured);
};
```

We simply mimic the beginning of the original `loadIfc()` function.

### Final Notes

Take a look at these commits:

- Add Config: [f5d9ff76c9b90fa282eb88f1fc94b1bb3e8aa9e4](https://github.com/andrewisen/IFC.js-web-worker-example/commit/f5d9ff76c9b90fa282eb88f1fc94b1bb3e8aa9e4)
- Remove mainObject: [d84a4864a8573c6d5cd2e67fef14439e701f453d](https://github.com/andrewisen/IFC.js-web-worker-example/commit/d84a4864a8573c6d5cd2e67fef14439e701f453d)
- Remove conflicting imports: [c336a38860d5dda1cc10759c840948177f48ad37](https://github.com/andrewisen/IFC.js-web-worker-example/commit/c336a38860d5dda1cc10759c840948177f48ad37)

## Info

Forked from [199f78f230f84ffe4d9105deb38b0e033cc6b715](https://github.com/agviegas/IFC.js/tree/199f78f230f84ffe4d9105deb38b0e033cc6b715) (2021-01-19).

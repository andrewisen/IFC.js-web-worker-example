## Introduction

### What are Web Workers?

JavaScript is a single-threaded environment, meaning multiple scripts cannot run at the same time. However, so-caleld `Web Workers` makes it possible to run a script operation in a background thread.

In other words:
A `Web Worker` is a JavaScript script that runs in the background, independently of any other scripts, without affecting the performance of the page.

### What can Web Workers do?

`Web Worker` are a simple means for web content to run scripts in background threads. Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code.

### I don't understand...

It's okay, check out: [https://www.w3schools.com/html/html5_webworkers.asp](https://www.w3schools.com/html/html5_webworkers.asp).

## Using Web Workers

### How do I configure IFC.js to work with Web Workers?

Please note that `Web Workers` will not work straight out the box.
`Web Workers` use the [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) when you [post a message](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage). Certain types, say `Functions`, are NOT supported by the structured clone algorithm. Therefore, we cannot build the entire IFC Project inside a `Web Worker`.

In summary:
We cannot parse, construct the project, and build the geometry inside a `Web Worker`

### Why can't I build the entire IFC Project inside a Web Worker?

The `mainObject`, used in `src/ifc-project-builder/ifc-structure-builder.js`, contains some nasty stuff. The structured clone algorithm cannot deal with that type of object.

## How do I solve this?

I purpose that we (yes, you and me) use a dirty trick. Let's:

1. Start a `Web Worker`
2. Run `loadIfcFileItems()` as usual
3. Run `constructProject()` without the `mainObject`
4. Exit the `Web Worker`
5. Append the `mainObject` (outside of the Web Worker)
6. Build the `geometry` (outside of the Web Worker)

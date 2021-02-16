## Introduction

A single `Web Worker` might not be enough for a large file, say > 100MB.

Yes, the `Web Worker` runs in the background but its synchronous code.
We can use multiple `Web Workers` build asynchronous code.

Check out: [Asynchronous Vs Synchronous Programming](https://www.youtube.com/watch?v=Kpn2ajSa92c)

One might call this approach `multithreading` or `parallelizing`.
I really don't want to go into technicalities right now.
So, for the sake of simplicity, let's call this approach:

> Multithreading

This might be a new concept if you only worked with web development.
If you have a background with C, Java, Python, etc. than this will be much easier to understand.

## TODO

In the meantime, check out my draft over at [https://bimwhale.gitbook.io/ifc-js/](https://bimwhale.gitbook.io/ifc-js/).

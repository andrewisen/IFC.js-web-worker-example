## Introduction

Let's ask ourselves this simple question:

> Why do we need to save the scene?

Let's say that we have a large file. Assume that it takes >1min to parse the file. Now, let's assume that we want to view the result many times. We might even turn off our computer in-between viewings.

> How can we view the file, without re-parsing it?

One might suggest using [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) (read more [here](https://www.w3schools.com/jsref/prop_win_localstorage.asp)). However, `localStorage` is limited to about 5MB and can contain only strings and is not accessible from `Web Workers`.
I suggest using [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) instead. `IndexedDB` is a way for you to persistently store data inside a user's browser. Read more [here](https://javascript.info/indexeddb).

## TODO

In the meantime, check out my draft over at [https://bimwhale.gitbook.io/ifc-js/](https://bimwhale.gitbook.io/ifc-js/).

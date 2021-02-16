## Introduction

Example `04` is a set of examples:

- `single-web-worker`
- `multi-web-worker`
- `indexed-db`
- `geometry optimization`

These examples explore different techniques, mainly [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)

There's a README in each example folder with more information.

## Getting Started

Each example (in this folder) needs additional files in order to work.
Please run `npm run build-examples` to generate these build files.

**Remember**: You must run this command from the project's root.

This should generate new build files. These are tailored to work with these examples.
For example, the file `IFC.specificWorker.js` will only work inside the `single-web-worker` example.

## Architecture of Example 04

Each example consist of four different parts:

1. **Parse** the IFC file
2. Use **Web Worker** or **IndexedDB** perform said parsing (optional)
3. Build or Re-build the scene from the previous step
4. Merge the geometry into a single object (optional)

Here's another way to visualize these steps:

```
          +---------+   +----------------------------+   +-------------------+   +---------+
          |         |   |                            |   |                   |   |         |
main.js-->|  PARSE  |-->|  WEB WORKER or INDEXED DB  |-->| BUILD or RE-BUILD |-->|  MERGE  |
          |         |   |                            |   |                   |   |         |
          +---------+   +----------------------------+   +-------------------+   +---------+
```

Each example starts with a `main.js`. These are very similar to each other. The next step is the actual parsing of the IFC file. The function `parseIfcFile` handles this.

Depending on which example you use, a `Web Worker` or `IndexedDB` might be used. Afterwards, the geometry is being built or re-built. At the end, the geometry can be merged into a single object for faster rendering.

## Example

For example, the `single web worker` example looks like this:

```
            +---------+     +-------------+     +--------+
            |         |     |             |     |        |
main.js --> |  PARSE  | --> |  WEB WORKER | --> | BUILD  |
            |         |     |             |     |        |
            +---------+     +-------------+     +--------+
```

Notice that this example doesn't use a IndexedDB, and thus, doesn't rebuild the scene. Also, notice that we don't merge geometry at the end.

## Folder Structure

As you can see, each example share many common assets. Also, some assets are very similar to each other.
That explains the folder structure.

```
Example 04
├───src
├───build
└───assets
    ├───css
    └───js
        ├───parse
        ├───web-worker
        ├───indexed-db
        ├───build-scene
        └───merge
```

The important parts can be found in `examples/04/assets/js`.
Notice how these folders reflect the architecture:

1. **Parse**
2. **Web Worker** or **IndexedDB** (optional)
3. Build or Re-build the scene
4. Merge the geometry (optional)

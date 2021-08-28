# The repro for the question ["How to setup the TypeScript compiler for the library so that the unused modules will be cut off by Webpack in the dependents projects?"](https://stackoverflow.com/q/68340624/4818123)

[🌎 Check the question](https://stackoverflow.com/q/68340624/4818123)

## Experiment flow

1. Get this repository by VCS
2. Install dependencies as always (`npm i` command).
3. Check the `src/index.ts`. It imports `isUndefined` function from the library and using it.
4. Run `npm run ProductionBuild`
5. Beautify the output `index.js` by tool like [beautifier.io](https://beautifier.io/). 
   You will see that whole library has been bundled while it's desired that only `inUndefined` has been bundled.

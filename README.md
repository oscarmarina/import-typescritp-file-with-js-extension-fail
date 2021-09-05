# Describe the bug [vitejs](https://vitejs.dev/)

Importing a typeScript file with .js extension from `html` file or a `typeScript` file fails with:


- [similar issue](https://github.com/vitejs/vite/issues/3040)

## Installation

```bash
npm i
```

## Scripts package.json

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "vite-build": "vite build",
    "tsc-build": "tsc"
  },
```

### `index.html` root level just with the intention of redirecting to demo/index.html

```groovy
./
├── my-element-openwc-vitejs-ts/
│   ├── index.html
```

<hr>

## master branch

### vite fail

```sh
npm run vite-build
```

```sh
[vite] Internal server error: Failed to resolve import "../my-element-openwc-vitejs-ts.js" from "demo/index.html?html-proxy&index=0.js". Does the file exist?

[plugin:vite:import-analysis]
```


```groovy
./
├── my-element-openwc-vitejs-ts/
│   ├── demo/
│   │   └── index.html ====> try to import module my-element-openwc-vitejs-ts.js (fail)
│   ├── src/
│   │   └── MyElementOpenwcVitejsTs.ts
│   ├── .editorconfig
│   ├── .gitignore
│   ├── index.html
│   ├── LICENSE
│   ├── my-element-openwc-vitejs-ts.ts ====> try to import module MyElementOpenwcVitejsTs.js (fail)
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   └── vite.config.js
```

<hr>

## all-with-ts-extension branch


### vite OK

```sh
npm run vite-build
```


### tsc fail

```sh
npm run tsc-build
```

```sh
my-element-openwc-vitejs-ts.ts:1:41 - error TS2691: An import path cannot end with a '.ts' extension. Consider importing './src/MyElementOpenwcVitejsTs.js' instead.

1 import { MyElementOpenwcVitejsTs } from './src/MyElementOpenwcVitejsTs.ts';
                                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Found 1 error.
```

```groovy
./
├── my-element-openwc-vitejs-ts/
│   ├── demo/
│   │   └── index.html ====> try to import module my-element-openwc-vitejs-ts.ts (OK)
│   ├── src/
│   │   └── MyElementOpenwcVitejsTs.ts
│   ├── .editorconfig
│   ├── .gitignore
│   ├── index.html
│   ├── LICENSE
│   ├── my-element-openwc-vitejs-ts.ts ====> try to import module MyElementOpenwcVitejsTs.ts (OK)
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   └── vite.config.js
```

# 💧 plop generator ngxs store

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]

A [`plop`][plop] generator for allowing easily create slices of state for [`ngxs`][ngxs] state management pattern + library for Angular.

This package aims to follow closely the [`ngxs style guide`][ngxs-style-guide] .

## 📦 Installation

This package is hosted on [`npm`][npm].

```bash
npm install --save-dev plop-generator-ngxs-store
```

## 🥑 Usage

First, be sure you have [`plop`][plop] installed. Then, add the following line to your `plopfile.js`.

```javascript
plop.load("plop-generator-ngxs-store");
```

A minimal `plopfile.js` can be
```javascript
module.exports = (plop) => plop.load('plop-generator-ngxs-store');
```

Now you'll have access to the `store` generator as shown below.

```bash
> plop

? store name (examples: HelloWorld, hello-world): HelloWorld
```

The `store` generator scaffolds ngxs slice of state. Generated files include actions `.actions.ts`, default state model `.constant.ts`, selectors `.selector.ts`, state `.state.ts`, tests for the state `.state.spec.ts` and state model `.types.ts`.
Tests are written in jest.
All the generated files are exported via `index.ts` file for easy importing.

```text
src
└── store
   ├── index.ts
   └── hello-world.actions.ts
   └── hello-world.constant.ts
   └── hello-world.selector.ts
   └── hello-world.state.ts
   └── hello-world.state.spec.ts
   └── hello-world.types.ts
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]

[npm]: https://www.npmjs.com/package/plop-generator-ngxs-store
[version-badge]: https://img.shields.io/npm/v/plop-generator-ngxs-store?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/plop-generator-ngxs-store?style=flat-square
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=plop-generator-ngxs-store
[size-badge]: https://img.shields.io/bundlephobia/minzip/plop-generator-ngxs-store?style=flat-square
[issues]: https://github.com/lukasz-pekala/plop-generator-ngxs-store/issues
[twitter]: https://twitter.com/lukasz_pekala
[plop]: https://plopjs.com
[ngxs]: https://www.ngxs.io/
[ngxs-style-guide]: https://www.ngxs.io/recipes/style-guide

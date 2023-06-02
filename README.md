# plop generator ngxs store

_A [`plop`][plop] generator for [`ngxs`][ngxs] state management pattern + library for Angular._

## 📦 Installation

This package is hosted on [`npm`][npm].

```bash
npm install --save-dev @lukasz-pekala/plop-generator-ngxs-store
```

## 🥑 Usage

First, be sure you have [`plop`][plop] installed. Then, add the following line to your `plopfile.js`.

```javascript
plop.load("@lukasz-pekala/plop-generator-ngxs-store");
```

Now you'll have access to the `store` generator as shown below.

```bash
> plop-generator-ngxs-store@1.0.0 plop C:\dev\plop-generator-ngxs-store
> plop

? store name (examples: HelloWorld, hello-world): HelloWorld
```

The `store` generator scaffolds ngxs slice of state. Generated files include actions `.actions.ts`, default state model `.constant.ts`, selectors `.selector.ts`, state `.state.ts`, tests for the state `.state.spec.ts` and state model `.types.ts`.
Tests are written in jest.
All the generated files are exported via `index.ts` file for easy importing. The resulting directory looks like this for a hook named `useHook`.

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

[issues]: https://github.com/lukasz-pekala/plop-generator-ngxs-store/issues
[twitter]: https://twitter.com/lukasz_pekala
[plop]: https://plopjs.com
[ngxs]: https://www.ngxs.io/

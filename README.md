## Dev dependencies

- @babel/core
- @babel/preset-env
- @babel/preset-react
- @babel/preset-typescript
- @testing-library/jest-dom
- @testing-library/react
- @types/jest
- @types/react
- @types/react-dom
- @vitejs/plugin-react
- autoprefixer
- babel-jest
- jest
- jest-environment-jsdom
- postcss
- tailwindcss
- ts-jest
- ts-node
- typescript
- vite

```
yarn add --dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @testing-library/jest-dom @testing-library/react @types/jest @types/react @types/react-dom @vitejs/plugin-react autoprefixer babel-jest jest jest-environment-jsdom postcss tailwindcss ts-jest ts-node typescript vite
```

### jest.config.cjs

```
export default {
  testEnvironment: "jest-environment-jsdom",
  serupFile: ["./jest.setup.ts"],
};
```

### babel.config.cjs

```
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-typescript"],
  ],
};
```

### jest.setup.ts

```
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import "whatwg-fetch";
```

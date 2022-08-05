yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react

yarn add --dev @testing-library/react @types/jest jest-environment-jsdom

yarn add --dev whatwg-fetch

yarn add --dev jest
yarn add --dev @babel/preset-typescript
yarn add --dev ts-jest
yarn add --dev @types/jest

// jest.config.js

```
import "whatwg-fetch";
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  serupFile: ["./jest.setup.js"],
};

```

// babel.config.cjs

```
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-typescript"],
  ],
};
```

    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.0.0",
    "autoprefixer": "^10.4.8",
    "postcss": "^8.4.14",
    "tailwindcss": "^3.1.7",
    "typescript": "^4.6.4",
    "vite": "^3.0.0"

yarn add --dev babel-jest @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
yarn add --dev jest jest-environment-jsdom @types/jest
yarn add --dev ts-jest ts-node

serupFile: ["./jest.setup.ts"],

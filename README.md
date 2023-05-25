# react-condi

[<img src="https://img.shields.io/npm/v/react-condi?style=for-the-badge">](https://www.npmjs.com/package/react-condi)
<img src="https://img.shields.io/npm/types/react-condi?label=%20&amp;logo=typescript&amp;logoColor=white&amp;style=for-the-badge">
<img src="https://img.shields.io/npm/dt/react-condi?style=for-the-badge" >
[<img src="https://img.shields.io/bundlephobia/minzip/react-condi?style=for-the-badge">](https://bundlephobia.com/package/react-condi)

The most powerful component of the React ecosystem.

**react-condi** is a game-changing library for the React ecosystem. With it you can do conditional rendering in a way
never seen before.

# Installation

#### Using npm

```bash
npm i react-condi
```

#### Using Yarn

```bash
yarn add react-condi
```

#### Using pnpm

```bash
pnpm add react-condi
```

# Why?

### Tired of doing conditional rendering this way?

```tsx
import React from "react"

const number = 5;
const App = () => {
    return (
        <>
            {number === 5 && "Number is five"}
        </>
    );
};
```

### With react-condi

With react-condi you only need to do the following:

```tsx
import React from "react"
import {Conditional} from 'react-condi';

const number = 5;
const App = () => {
    return (
        <Conditional value={number === 5}>
            Number is five
        </Conditional>
    );
};
```

More beautiful, huh?

## License

[MIT](LICENSE)

### Authors

- [santigp258](https://twitter.com/blasanti258)

<sub>Note: if you didn't get the joke. Yes, it is a joke</sub>

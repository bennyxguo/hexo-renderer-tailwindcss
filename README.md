# hexo-renderer-tailwindcss

> A hexo renderer for tailwindcss with postcss preprocessor.

## Install

```
yarn add hexo-renderer-tailwindcss

// or

npm install hexo-renderer-tailwindcss --save
```

## Postcss config

Create `.postcssrc.js` at your Hexo root folder

```javascript
module.exports = {
  from: undefined,
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'autoprefixer': {},
  }
}
```

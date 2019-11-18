# hexo-renderer-tailwindcss

> A hexo renderer for tailwindcss with postcss preprocessor.

## Install

```bash
yarn add hexo-renderer-tailwindcss

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

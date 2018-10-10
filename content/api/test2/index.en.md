---
date: "2018-03-29T21:54:53-05:00"
title: "Test2"
titleEn: "test2"
tags: ["api", "method"]
Description: ""

---

## Getcontainer list
where is my ficking container!!! WTF!!!

Code example
```js
grunt.initConfig({
  assemble: {
    options: {
      assets: 'docs/assets',
      data: 'src/data/*.{json,yml}',
      helpers: 'src/custom-helpers.js',
      partials: ['src/partials/**/*.{hbs,md}']
    },
    pages: {
      options: {
        layout: 'default.hbs'
      },
      files: {
        './': ['src/templates/pages/index.hbs']
      }
    }
  }
};
```
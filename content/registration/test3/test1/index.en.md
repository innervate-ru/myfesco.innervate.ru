---
date: "2018-03-29T21:54:53-05:00"
title: "Test1"
titleEn: "test1"
tags: ["api", "methods"]
Description: ""
type: api_doc
layout: api_doc
---

## Get invoice list

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
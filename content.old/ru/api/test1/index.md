---
date: "2018-03-29T21:54:53-05:00"
title: "Test1"
titleEn: "test1"
tags: ["api", "метод"]
Description: ""
languages:
    ru:
        menu:
          main: 
            Name: test1
            Identifier: "test1"
            Weight: 10
            Parent: "api"
            URL: "/api/test1/"
---

## Получение списка инвойсов

Пример кода
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
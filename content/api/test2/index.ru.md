---
date: "2018-03-29T21:54:53-05:00"
title: "Test2"
titleEn: "test2"
tags: ["api", "метод"]
Description: ""

---

## Получение списка контейнеров
Сейчас ass вопрос с тем, как клиента оповестить при отсутствии контейнера, что он должен создать запрос с новым закрытым ключом

> «Мой дядя самых честных правил,  
Когда не в шутку занемог,  
Он уважать себя заставил  
И лучше выдумать не мог.  
Его пример другим наука;  
Но, боже мой, какая скука  
С больным сидеть и день и ночь,  
Не отходя ни шагу прочь!  
Какое низкое коварство  
Полуживого забавлять,  
Ему подушки поправлять,  
Печально подносить лекарство,  
Вздыхать и думать про себя:  
Когда же черт возьмет тебя!»  

{{< img name="images/title*" title="Подпись к фото которая попадает в тег alt" class="img-fluid" zoom="true" style="width:30%; margin: 0 auto;">}}


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
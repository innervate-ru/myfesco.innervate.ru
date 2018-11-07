---
weight: 300
title: фильтрация по тэгам
type: api_doc
layout: api_doc
---

{{<apiContent/wrapper>}}
{{<apiContent/description>}}

## Фильтрация по тегам

Метод <code>getOrders_V2</code> может возвращать список заказов, помеченных указанным тегом. 

В запросе можно указать несколько тегов, они применятся в логике <code>AND (И)</code>.

{{</apiContent/description>}}

{{<apiContent/code>}}

{{<apiContent/codeExample lang="graphql">}}
```graphql
query getTags_SampleQuery { 
  orders { 
    getTags 
  } 
}

query getOrders_SampleQueryWithTags { 
  orders { 
    getOrders_V2 (tags:"уралстрой шанха") 
  } 
}
```
{{</apiContent/codeExample>}}

Первый запрос вернет список тегов — скруктурированный JSON вида:
{{<apiContent/codeExample lang="json">}}

```json
{
  "data": {
    "orders": {
      "getTags": [
        "template",
        "Sandy ningbo 18891 ",
        "more luck борисов культиваторы ",
        "Allison AVS ",
        "уралстрой фучжоу-уфа ",
        "S-abrasive Пусан- Москва 20-ка ",
        "стельки Wenzhou Weiermei Insole ",
        "уралстрой шанха",
        "дворники триера",
        "Запрос — 13.10.2017 10:18:21"
      ]
    }
  }
}
```
{{</apiContent/codeExample>}}

{{</apiContent/code>}}
{{</apiContent/wrapper>}}
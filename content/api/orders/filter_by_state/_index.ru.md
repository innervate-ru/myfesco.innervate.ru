---
weight: 200
title: фильтрация по статусам
type: api_doc
layout: api_doc
---

{{<apiContent/wrapper>}}
{{<apiContent/description>}}

## Фильтрация по статусам

Метод <code>getOrders_V2</code> может возвращать список заказов, отфильтрованный по следующим признакам:

- статусы:
  - черновик <code>isDraft: true</code>,
  - ждет утверждения (TODO: договориться, что мы понимаем под "ждет утверждения") <code>isWaitingConfirmation: true/false</code>,
  - активная заявка (TODO: описать, что мы понимаем под статусом "Архивная") <code>isActive: true/false</code>,
  - архивная заявка (TODO: описать, что мы понимаем под статусом "Архивная") <code>isArchived: true/false</code>,
  - запрос котировки (TODO: отрефакторить название — должно быть isRequestForQuotation) <code>isRequestForQuotation: true/false</code>,
- признаки:
  - шаблон (заявка с тегом "шаблон") <code>isTemplate: true/false</code>,
- таможенный режим:
  - Внутритаможенный транзит (ВТТ) <code>isCustrDDU: true/false</code>,
  - Грузовая таможенная декларация (ГТД) <code>isCustrDDP: true/false</code>.

<aside class="success">Можно применить несколько признаков в запросе, в этом случае они сработают в логике <code>AND (И)</code>. Обратите внимание, что указание сразу нескольких признаков по статусу вернет вам пустой запрос — так как запрос на перевозку может быть только в одном из статусов.</aside>

### Запрос GraphQL

`query { orders { getOrders_V2 (isCustrDDU: true, isActive:true) } }`

<aside class="notice">Метод возвращает данные только авторизованным пользователям! <a href="/ru/#аутентификация">Подробнее об авторизации и аутентификации</a></aside>

{{</apiContent/description>}}

{{<apiContent/code>}}

{{<apiContent/codeExample lang="graphql">}}
```graphql
query getOrders_SampleQuery {
  orders {
    getOrders_V2 {
      req_uid
      inner_id
      outer_id
      create_date
      purchase_order
      delivery_term
      route
      route_latin
      client_short_name
      client_code
      shipper_name
      consignee_name
      cargo
      office 
      office_latin
      manager
      status
      containers
      bills
    }
  }
}
```
{{</apiContent/codeExample>}}

{{</apiContent/code>}}
{{</apiContent/wrapper>}}
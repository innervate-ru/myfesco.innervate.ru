---
weight: 100
title: список всех заказов
type: api_doc
layout: api_doc
---
{{<apiContent/wrapper>}}
{{<apiContent/description>}}

# Заказы на перевозку

## Список всех заказов

Метод <code> getOrders_V2 </code> возвращает данные списка заявок на перевозку.

### Запрос GraphQL

`query { orders { getOrders_V2 } }`

> Метод возвращает данные только авторизованным пользователям! [Подробнее об авторизации и аутентификации](/ru/аутентификация)

### Параметры запроса

Parameter | Type | Required | Description
--------- | ------- | ----------- | ---
locale | String | — | Текущая локаль пользователя
date | String | — |
searchType | Int | — |
searchTxt | String | — |
offset | Int | — |
limit | Int | — |
tags | [String] | — |
onlyDelivered | Boolean | — | Заявки, которые созданы из ЛК и отправлены в CL
onlyTemplates | Boolean | — |Шаблоны заявок (созданные в ЛК, у которых указан хотя бы 1 тег)
isDraft | Boolean | — |
isArchived | Boolean | — |
isActive | Boolean | — |
isTemplate | Boolean | — |
isQuotaRequest | Boolean | — |
isCustrDDP | Boolean | — |
isCustrDDU | Boolean | — |
isCustrEmpty | Boolean | — |

### Возвращаемые данные

Parameter | Type  | Description
--------- | ------- | ---
req_clnt_code_6 | String
req_date_inserted | String
req_description | String
route_latin | String
office_latin | String
emp_fio | String
emp_latin_name | String
clnt_name | String
object_list | String
req_po | String
loc_uid_from | Int
loc_uid_to | Int
wte_uid | Int
req_xml | String
req_xml_original | String
req_login | String
initialData | String
data | String
container_groups__info | [String]
invoices__info | [p_ro_request_clinv_selectRow]
related_documents__info | [String]
req_uid | Int!
create_date | String
route | String
bills | [String]
containers | [String]
customs_status | [ContainerCustomsStatus]
client_code | String
client_code_ss | String
client_short_name | String
client_ss_name | String
outer_id | Int
office | String
manager | String
status | String | from_new, from_old, draft
inner_status | String |  DRAFT, PENDING, ERROR, DELIVERED
purchase_order | String
shipper_name | String
consignee_name | String
cargo_name_bl | String
cargo | [String]
tags | [String]
delivery_term | String
inner_id | Int
closed_by | String
log | String  | JSON
active | Boolean
request_custr_uid | Int
show_as_active | Boolean
declarations | [CustomsDeclaration]
booking_number | [OrderBookingNumber]

{{</apiContent/description>}}

{{<apiContent/code>}}
пример кода


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

{{<apiContent/codeExample lang="js">}}
```js
var app = new Vue({
    delimiters: ['[[', ']]'],
    el: '#page',
    data: {
        lang: 'graphql',
    },
    methods: {
        selectLang(lang) {
            this.lang = lang
            console.log('in selectLang:', lang)
        }
    },
})
```
{{</apiContent/codeExample>}}

{{<apiContent/codeExample lang="go">}}
```go
package main

import "github.com/bep/kittn/auth"

func main() {
	api := auth.Authorize("meowmeowmeow")

	_ = api.GetKittens()
}
```
{{</apiContent/codeExample>}}

{{<apiContent/codeExample lang="json">}}
```json
[
  {
    "req_uid": 797149,
    "inner_id": null,
    "outer_id": 797149,
    "create_date": "2018-10-10T13:23:37.207Z",
    "purchase_order": "",
    "delivery_term": null,
    "route": null,
    "route_latin": null,
    "client_short_name": null,
    "client_code": "TILMUA",
    "shipper_name": null,
    "consignee_name": null,
    "cargo": [],
    "office": "ФИТ Владивосток",
    "office_latin": null,
    "manager": "Митина Наталья Алексеевна",
    "status": "from_old",
    "containers": [],
    "bills": null
  },
  {
    "req_uid": 796949,
    "inner_id": 54280,
    "outer_id": 796949,
    "create_date": "2018-10-10T07:52:04.860Z",
    "purchase_order": "23001",
    "delivery_term": "CY-FOR",
    "route": "Shanghai - Silikatnaja",
    "route_latin": null,
    "client_short_name": "Эквивалент ООО",
    "client_code": "TILMUA",
    "shipper_name": "Ningbo Joint-Transport International Logisitics Co.,Ltd",
    "consignee_name": "KABSVYAZELEKTRO ., Ltd ",
    "cargo": [
      "электроника"
    ],
    "office": "ФИТ Владивосток",
    "office_latin": null,
    "manager": "Igumnova",
    "status": "from_new",
    "containers": [
      "FESU2091359"
    ],
    "bills": [
      "FITMV316199",
      "FCMV316199"
    ]
  }
]
```
{{</apiContent/codeExample>}}

{{</apiContent/code>}}
{{</apiContent/wrapper>}}

# Show History Transactions User

Show History Transactions User

**URL** : `/transactions/userstatus/:id`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Responses

**Condition** : If user have a transaction.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "Detail Transaction Data",
    "data": [
        {
            "id": 2,
            "transaction_date": "2020-12-11T17:00:00.000Z",
            "email": "user10@lib.com",
            "user_id": 6,
            "name": "unknown",
            "idBook": 2,
            "title": "Kisah Tanah Jawa",
            "genreName": "Romance",
            "authorName": "Sayembara",
            "statusName": "Pending"
        }
    ],
    "pageInfo": {
        "page": 1,
        "totalPage": 1,
        "perPage": 5,
        "totalData": 1,
        "nextLink": null,
        "prevLink": null
    }
}
```
## Data Empty Responses

**Condition** : if not have data.

**Code** : `200 OK`

```json
{
    "success": true,
    "message": "Detail Transaction Data",
    "data": [],
    "pageInfo": {
        "page": 1,
        "totalPage": 1,
        "perPage": 5,
        "totalData": 0,
        "nextLink": null,
        "prevLink": null
    }
}
```
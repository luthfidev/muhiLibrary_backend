# Detail Transactions

Detail Transaction

**URL** : `/transactions/:id`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES (admin only)

## Success Responses

**Condition** : Admin can show detail book.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "Detail transaction",
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
            "statusName": "Cancel"
        }
    ]
}
```
## Data Empty Responses

**Condition** : if not have data.

**Code** : `200 OK`

```json
{
    "success": false,
    "message": "transaction not found"
}
```
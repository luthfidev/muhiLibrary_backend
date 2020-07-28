# Show List Transactions

Show List Transactions 

**URL** : `/transactions/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Responses

**Condition** : If have a transaction.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "List all transaction",
    "data": [
        {
            "id": 2,
            "transaction_date": "2020-12-11T17:00:00.000Z",
            "userid": 6,
            "name": "unknown",
            "picture": "uploads/default.png",
            "bookid": 2,
            "title": "Kisah Tanah Jawa",
            "statusName": "Cancel"
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
    "message": "List all transaction",
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
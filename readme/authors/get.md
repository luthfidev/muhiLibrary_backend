# Show List Authors

All can see list authors

**URL** : `/authors`

**Method** : `GET`

**Auth required** : No

**Permissions required** : NO

## Success Responses

**Condition** : All can see authors.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "List authors",
    "data": [
        {
            "id": 701,
            "name": "Carol S. Dweck, Ph.d.",
            "description": "Carol S. Dweck, Ph.d",
            "created_at": "2020-07-12T04:32:05.000Z",
            "updated_at": "2020-07-12T10:42:44.000Z"
        },
        {
            "id": 5,
            "name": "Eko",
            "description": "Eko Ivano Winata",
            "created_at": "2020-07-08T23:28:19.000Z",
            "updated_at": "2020-07-13T04:27:49.000Z"
        },
        {
            "id": 695,
            "name": "Erich Fromm",
            "description": "Erich Fromm",
            "created_at": "2020-07-09T02:56:18.000Z",
            "updated_at": "2020-07-12T09:24:19.000Z"
        },
        {
            "id": 696,
            "name": "Hasna Wijayanti",
            "description": "Hasna Wijayanti",
            "created_at": "2020-07-09T02:56:48.000Z",
            "updated_at": "2020-07-12T09:23:27.000Z"
        },
        {
            "id": 700,
            "name": "Jeriko",
            "description": "Jeriko",
            "created_at": "2020-07-12T03:09:33.000Z",
            "updated_at": null
        }
    ],
    "pageInfo": {
        "page": 1,
        "totalPage": 2,
        "perPage": 5,
        "totalData": 8,
        "prevLink": null,
        "nextLink": "http://localhost:5000/authors?page=2"
    }
}
```
## Data Empty Responses

**Condition** : if not have data.

**Code** : `200 OK`

```json
{
    "success": true,
    "message": "List All Authors",
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
# Show List Genres

Show all genres with token required

**URL** : `/genres`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : NO

## Success Responses

**Condition** : All can see genres.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "List all genres",
    "data": [
        {
            "id": 3,
            "name": "Geografi",
            "created_at": "2020-07-06T00:33:03.000Z",
            "updated_at": null
        },
        {
            "id": 1,
            "name": "Horror",
            "created_at": "2020-07-06T00:32:32.000Z",
            "updated_at": null
        },
        {
            "id": 26,
            "name": "Humor",
            "created_at": "2020-07-12T07:56:12.000Z",
            "updated_at": "2020-07-12T09:25:27.000Z"
        },
        {
            "id": 28,
            "name": "Indiana",
            "created_at": "2020-07-12T11:01:17.000Z",
            "updated_at": null
        },
        {
            "id": 27,
            "name": "Psikologi",
            "created_at": "2020-07-12T07:57:18.000Z",
            "updated_at": "2020-07-12T09:24:36.000Z"
        }
    ],
    "pageInfo": {
        "page": 1,
        "totalPage": 2,
        "perPage": 5,
        "totalData": 6,
        "prevLink": null,
        "nextLink": "http://localhost:5000/genres?page=2"
    }
}
```
## Data Empty Responses

**Condition** : if not have data.

**Code** : `200 OK`

```json
{
    "success": true,
    "message": "List all genres",
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
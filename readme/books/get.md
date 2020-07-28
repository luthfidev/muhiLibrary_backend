# Show List Books

Show all books

**URL** : `/books`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : NO

## Success Responses

**Condition** : All can show list book.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "List All Book",
    "data": [
        {
            "id": 1,
            "title": "Janoko",
            "releaseDate": "2020-06-30T17:00:00.000Z",
            "image": "http://localhost:5000/uploads\\bookdummy.jpg",
            "description": "Janoko",
            "authorId": 1,
            "authorName": "DANIEL C. DENNETT",
            "genreId": 1,
            "genreName": "Horror",
            "nameStatusId": 1,
            "nameStatus": "Available",
            "created_at": "2020-07-28T02:56:05.000Z",
            "updated_at": null
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
    "message": "List All Book",
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
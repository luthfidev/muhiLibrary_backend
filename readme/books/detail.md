# Detail Books

Detail books

**URL** : `/books/:id`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : NO

## Success Responses

**Condition** : All can show detail book.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "Detail book",
    "data": [
        {
            "id": 1,
            "title": "kamal",
            "description": "kamal",
            "image": "http://localhost:5000/uploads\\1595930774402kaya harta kaya amal.png",
            "authorId": 1,
            "authorName": "DANIEL C. DENNETT",
            "genreId": 1,
            "genreName": "Horror",
            "releaseDate": "2020-10-11T17:00:00.000Z",
            "nameStatusId": 1,
            "nameStatus": "Available",
            "descriptionStatus": "books ready to be borrowed\r\n",
            "created_at": "2020-07-28T02:56:05.000Z",
            "updated_at": "2020-07-28T03:06:13.000Z"
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
    "message": "Book not found"
}
```
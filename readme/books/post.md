# Create Books

Created book for admin only

**URL** : `/books`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES (admin only)

**Data constraints**

```json
{
    "title": "[name in plain text]",
    "description": "[name in plain text]",
    "image": "[image-file]",
    "genreid": "[number]",
    "authorid": "[number]",
    "releasedate": "[date]",
    "statusid": "[number(1 isAvailable || 2 isNotAvailable)]",
}
```

## Success Responses

**Condition** : Admin can create books.

**Code** : `201 CREATED`


```json
{
    "success": true,
    "message": "create book has been success",
    "data": {
        "title": "Kisah Tanah Jawa",
        "description": "Horror",
        "image": "uploads\\1595930498771kaya harta kaya amal.png",
        "genre_id": "1",
        "author_id": "1",
        "release_date": "2020-06-06",
        "status_id": "1"
    }
}
```
## Error Responses

**Condition** : if not have token.

**Code** : `400 BAD REQUEST`


```json
{
    "success": false,
    "message": "Missing Authorization Header"
}
```

**Condition** : if not admin.

**Code** : `400 BAD`


```json
{
    "susccess": false,
    "message": "Not Allowed"
}
```
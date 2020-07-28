# Update Books

Update books with token required

**URL** : `/books`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : YES (admin only)

## Success Responses

**Condition** : Admin can update books.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "book has been update",
    "data": {
        "title": "kamal",
        "description": "kamal",
        "image": "uploads\\1595930774402kaya harta kaya amal.png",
        "genre_id": "1",
        "author_id": "1",
        "release_date": "2020-10-12",
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
    "message": "Invalid Token"
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
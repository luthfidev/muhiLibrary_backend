# Update Authors

Update authors with token required

**URL** : `/authors`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : YES (admin only)

## Success Responses

**Condition** : Admin can update authors.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "Author has been update",
    "data": {
        "name": "Sayembara",
        "description": "sayembara"
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
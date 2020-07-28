# Update Authors

Update authors with token required

**URL** : `/genres`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : YES (admin only)

## Success Responses

**Condition** : Admin can update genres.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "Genre has been updated",
    "data": {
        "name": "Romance"
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
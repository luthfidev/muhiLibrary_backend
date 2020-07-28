# Create Authors

Created author for admin only

**URL** : `/authors`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES (admin only)

**Data constraints**

```json
{
    "name": "[name in plain text]",
    "description": "[description in plain text]",
}
```

## Success Responses

**Condition** : Admin can create authors.

**Code** : `201 CREATED`


```json
{
    "success": true,
    "message": "Create author book has ben success",
    "data": {
        "name": "Santoso",
        "description": "Comedyan"
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
# Create Genres

Created genre for admin only

**URL** : `/genres`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES (admin only)

**Data constraints**

```json
{
    "name": "[name in plain text]"
}
```

## Success Responses

**Condition** : Admin can create genres.

**Code** : `201 CREATED`


```json
{
    "success": true,
    "message": "Create genre has ben success",
    "data": {
        "name": "Action"
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
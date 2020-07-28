# Create Users

Created user for admin only

**URL** : `/users`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES (admin only)

**Data constraints**

```json
{
    "name": "[name in plain text]",
    "email": "[valid email address]",
    "password": "[password in plain text]",
    "roleid": "[enum (1 isAdmin || 2 isUser)]"
}
```

## Success Responses

**Condition** : Admin can create users.

**Code** : `201 CREATED`


```json
{
    "success": true,
    "message": "User has been created success",
    "data": {
        "email": "dalbosd@lib.com",
        "role_id": "2"
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
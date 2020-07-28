# Update Users

Update data user for admin only and specific user, 
the user must have a token because the user id is in the token.

**URL** : `/users/:id/`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : Admin || user 

**Data constraints**

```json
{
    "name": "[for something to update]",
    "gender": "[for something to update]",
    "birthdate": "[for something to update]",
}
```

## Success Responses

**Condition** : Update success and update new token.

**Code** : `200 OK`

```json
{
    "success": true,
    "message": "Biodata admin was updated",
    "userData": {
        "id": 1,
        "email": "admin@lib.com",
        "name": "admin",
        "role": "admin"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBsaWIuY29tIiwicm9sZSI6ImFkbWluIiwibmFtZVVzZXIiOm51bGwsImlhdCI6MTU5NTkyNzI3NiwiZXhwIjoxNTk2MDEzNjc2fQ.6nWkYMkqkFJwjixtmu6sYi2Hl8dUGAiiDnRCRkvRDNU"
}
```

## Error Response

**Condition** : User not have token or token wrong

**Code** : `400 BAD REQUEST`

```json
{
    "success": false,
    "message": "Invalid Token"
}


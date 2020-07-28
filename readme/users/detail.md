# Detail Users

Detail users

**URL** : `/users/:id`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Responses

**Condition** : Admin and spesific user detail book.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "Detail user",
    "data": [
        {
            "name": "unknown",
            "email": "dalbo@lib.com",
            "password": "$2b$10$.v.gEm7DcuwsAWRDQ4maGuVpj3t3F0bEI1irsZXQtI8FdfQX.QpIW",
            "picture": "uploads/default.png",
            "birthdate": "2020-05-04T17:00:00.000Z",
            "gender": "Male",
            "role": "user"
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
    "message": "Biodata not found"
}
```
# Show List Users

Show all users with token required

**URL** : `/users`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES (admin only)

**Data constraints** : `{}`

## Success Responses

**Condition** : Admin can see list users.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "List all user data",
    "data": [
        {
            "id": 1,
            "email": "admin@lib.com",
            "name": "unknown",
            "nameRole": "admin",
            "gender": "Male",
            "created_at": "2020-07-28T00:54:36.000Z",
            "updated_at": "2020-07-28T01:24:50.000Z"
        }
    ],
    "pageInfo": {
        "page": 1,
        "totalPage": 1,
        "perPage": 5,
        "totalData": 1,
        "nextLink": null,
        "prevLink": null
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
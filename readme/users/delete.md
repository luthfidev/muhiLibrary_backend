# Delete Users 

Delete the users.

**URL** : `/users/:id`


**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : Admin only


## Success Response

**Condition** : If the User exists.

**Code** : `200 OK`

```json
{
    "success": true,
    "message": "User with id 5 is deleted"
}
```

## Error Responses

**Condition** : User not found for deleted.

**Code** : `404 NOT FOUND`

```json
{
    "success": false,
    "message": "Not user for delete"
}
```


**Condition** : Wrong Token.

**Code** : `404 BAD REQUEST`

```json
{
    "success": false,
    "message": "Invalid Token"
}
```
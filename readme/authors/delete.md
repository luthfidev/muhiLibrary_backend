# Delete Authors 

Delete the authors.

**URL** : `/authors/:id`


**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : Admin only


## Success Response

**Condition** : If the Author exists.

**Code** : `200 OK`

```json
{
    "success": true,
    "message": "Author with id 5 is deleted"
}
```

## Error Responses

**Condition** : Author not found for deleted.

**Code** : `404 NOT FOUND`

```json
{
    "success": false,
    "message": "Not Author for delete"
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
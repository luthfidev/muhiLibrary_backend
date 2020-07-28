# Delete Genres 

Delete the genres.

**URL** : `/genres/:id`


**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : Admin only


## Success Response

**Condition** : If the Genres exists.

**Code** : `200 OK`

```json
{
    "success": true,
    "message": "Genre with id 5 is deleted"
}
```

## Error Responses

**Condition** : Genre not found for deleted.

**Code** : `404 NOT FOUND`

```json
{
    "success": false,
    "message": "Not Genre for delete"
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
# Upload Avatar

Update image for profile user.

**URL** : `/users/upload/:id/`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : Admin || user 

**Data constraints**

```json
{
    "picture": "[image-file]"
}
```

## Success Responses

**Condition** : Update success and update new token.

**Code** : `200 OK`

```json
{
    "success": true,
    "message": "Upload success"
}
```

## Error Response

**Condition** : Image to large

**Code** : `400 BAD REQUEST`

```json
{
    "success": false,
    "message": "File too large"
}
```
**Condition** : Not image type

**Code** : `400 BAD REQUEST`

```json
{
    "success": false,
    "message": "Only allow jpg/jpeg, png"
}
```

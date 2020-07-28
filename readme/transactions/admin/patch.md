# Update Transaction Status

Update transaction with token required

**URL** : `/transaction`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : YES (admin only)

**Status Transaction**
```
1: Return Book
2: Borrowed
3: Pending
4: Cancel
```
## Success Responses

**Condition** : Admin can update transaction.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "Transaction has been updated",
    "data": {
        "status_id": "2"
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
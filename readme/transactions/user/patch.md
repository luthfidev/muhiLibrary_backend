# Update Transaction Status

Update transaction with token required

**URL** : `/transaction`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : YES (User Only)

**Status Transaction**
```
4: Cancel
```
## Success Responses

**Condition** : User can update transaction to cancel.

**Code** : `200 OK`


```json
{
    "success": true,
    "message": "Transaction has been updated",
    "data": {
        "status_id": "4"
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
# Create Transactions

Created transactions

**URL** : `/transactions/user`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES (user)

**Data constraints**

```json
{
    "transactiondate": "[date]",
    "userid": "[id user]",
    "bookid": "[id book]",
    "statusid": "[number(3 isPending proses borrow book]",
}
```

## Success Responses

**Condition** : create transaction.

**Code** : `201 CREATED`


```json
{
    "success": true,
    "message": "Create transactoin has been success",
    "data": {
        "transaction_date": "2020-12-12",
        "user_id": 6,
        "book_id": "102"
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

**Condition** : if not user.

**Code** : `400 BAD REQUEST`

```json
{
    "susccess": false,
    "message": "Not Allowed"
}
```
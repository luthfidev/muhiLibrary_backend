# Register

Used to login authentication

**URL** : `/auth/signup`

**Method** : `POST`


**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "email": "admin@lib.com",
    "password": "12345678"
}
```

## Success Response

**Code** : `201 CREATED`

**Content example**

```json
{
    "success": true,
    "message": "Register success",
    "data": "admin@lib.com"
}
```

## Error Response

**Condition** : If 'email' is exist.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "success": false,
    "message": "Email is exist, please use another  email"
}
```

**Condition** : If 'email' not email.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "success": false,
    "message": "Must be Email"
}

```

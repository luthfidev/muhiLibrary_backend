# Login

used to enter the application

**URL** : `/auth/signin`

**Method** : `POST`

**Auth required** : YES

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

**Code** : `200 OK`

**Content example**

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBsaWIuY29tIiwicm9sZSI6InVzZXIiLCJuYW1lVXNlciI6InVua25vd24iLCJpYXQiOjE1OTU5MjI5MDMsImV4cCI6MTU5NjAwOTMwM30.wuMFj40ZaM0reglJ-V4nnZf_f_OEnq7WJF8OkIreIsw"
}
```

## Error Response

**Condition** : If 'email' not found.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "success": false,
    "message": "Not found email"
}
```

**Condition** : If 'password' is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "success": false,
    "message": "Password not match"
}

```
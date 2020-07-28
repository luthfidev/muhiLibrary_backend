# API muhilibrary_backend
 
[![Build Status](https://travis-ci.org/luthfidev/muhilibrary-backend.svg?branch=master)](https://travis-ci.org/luthfidev/muhilibrary-backend) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
![Docker Pulls](https://img.shields.io/docker/pulls/126401/backend_muhilibrary?style=plastic) [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

This library muhi API to make transactions to borrow books or look for books register only.

***

## Dependencies

* Node Js
* Express Js
* bcrypt
* cors
* jasonwebtoken(JWT)
* body-parser
* dotenv
* express validator
* multer
* Mysql
  
***

## Installing

Clone the repo, install dependencies, and start the API server locally.

```shell
git clone https://github.com/luthfidev/muhiLibrary_backend.git
cd muhiLibrary_backend
mv .envDefault .env
vim .env
npm start
```
***

## Configuration

change .envDefault to .env, and you can modified according to your specifications.

APP_PORT = 5000<br>
APP_URL = http://localhost:5000<br>
<br>
DB_HOST = localhost<br>
DB_USER = 'must be filled'<br>
DB_PASS = 'must be filled'<br>
DB_NAME = muhilibrary<br>
DB_PORT = 3306<br>
<br>
TOKEN_SECRET = 'must be filled'<br>
TOKEN_ALGORITMA = HS256<br>

## Docker 
https://hub.docker.com/r/126401/backend_muhilibrary

## Heroku
<https://api-muhilibrary.herokuapp.com/>

## API End Point
### Auth
* [Auth For Signin](readme/signin.md) : `POST /auth/signin`
* [Auth For Signup](readme/signup.md) : `POST /auth/signup`

### User
* [Show List User](readme/users/get.md) : `GET /users`
* [Created User](readme/users/post.md) : `POST /users`
* [Update User](readme/users/patch.md) : `PATCH /users/:id`
* [Delete User](readme/users/delete.md) : `DELETE /users/:id`
* [Upload Avatar User](readme/users/patchavatar.md) : `PATCH /users/upload/:id`

### Book
* [Show List Book](readme/books/get.md) : `GET /books`
* [Created Book](readme/books/post.md) : `POST /books`
* [Update Book](readme/books/patch.md) : `PATCH /books/:id`
* [Delete Book](readme/books/delete.md) : `DELETE /books/:id`

### Genre
* [Show List Book](readme/genres/get.md) : `GET /genres`
* [Created Book](readme/genres/post.md) : `POST /genres`
* [Update Book](readme/genres/patch.md) : `PATCH /genres/:id`
* [Delete Book](readme/genres/delete.md) : `DELETE /genres/:id`

### Author
* [Show List Book](readme/authors/get.md) : `GET /authors`
* [Created Book](readme/authors/post.md) : `POST /authors`
* [Update Book](readme/authors/patch.md) : `PATCH /authors/:id`
* [Delete Book](readme/authors/delete.md) : `DELETE /authors/:id`

### Transaction Admin
* [Show List Transaction](readme/transactions/get.md) : `GET /transactions`
* [Created Transaction](readme/transactions/post.md) : `POST /transactions`
* [Update Transaction](readme/transactions/patch.md) : `PATCH /transactions/:id`
* [Delete Transaction](readme/transactions/delete.md) : `DELETE /transactions/:id`

### Transaction User
* [Show List Transaction](readme/transactions/get.md) : `GET /transactions`
* [Created Transaction](readme/transactions/post.md) : `POST /transactions`
* [Update Transaction for cancel only](readme/transactions/patch.md) : `PATCH /transactions/:id`


# API muhilibrary_backend
 
[![Build Status](https://travis-ci.org/luthfidev/muhilibrary-backend.svg?branch=master)](https://travis-ci.org/luthfidev/muhilibrary-backend) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)]


This library muhi API to make transactions to borrow books or look for books register members

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

## configuration

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

## heroku
<https://api-muhilibrary.herokuapp.com/>

## API End Point

```shell
* https://api-muhilibrary.herokuapp.com/auth/signin
* https://api-muhilibrary.herokuapp.com/auth/signup
* https://api-muhilibrary.herokuapp.com/users 
* https://api-muhilibrary.herokuapp.com/books
* https://api-muhilibrary.herokuapp.com/transactions
  - https://api-muhilibrary.herokuapp.com/transactions/user
  - https://api-muhilibrary.herokuapp.com/transactions/userstatus
* https://api-muhilibrary.herokuapp.com/genres
* https://api-muhilibrary.herokuapp.com/authors
* https://api-muhilibrary.herokuapp.com/bookstatuses 
```
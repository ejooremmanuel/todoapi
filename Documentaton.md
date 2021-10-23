## How to Use the Todo API

> A collection of all API endpoints available to clients
> Baseurl (Production) => https://todoapibyejoor/api/v1

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17239043-92595580-0431-40bc-a5ee-c6c63239fd48?action=collection%2Ffork&collection-url=entityId%3D17239043-92595580-0431-40bc-a5ee-c6c63239fd48%26entityType%3Dcollection%26workspaceId%3Ddf838b84-f850-4a84-b191-449bfd6d91e9#?env%5BNew%20Environment%5D=W10=)

> ### API endpoint For Registration >

> [](https://todoapibyejoor.herokuapp.com/api/v1/auth/register)

> A successful request will return a HTTP 201 status code

## Example

> #### Request

        curl --location --request POST 'https://todoapibyejoor.herokuapp.com/api/v1/auth/register' \
        --header 'Content-Type: application/json' \
        --data-raw '{
        "email":"ejoor@gmail.com",
        "password":"123456"
        }'

> #### Response

        {
        "message": "user created successfully."
        }

> ### API endpoint For Login >

> [](https://todoapibyejoor.herokuapp.com/api/v1/auth/login)

> A successful request will return a HTTP 201 status code

## Example

> #### Request

        curl --location --request POST 'https://todoapibyejoor.herokuapp.com/api/v1/auth/login' \
        --header 'Content-Type: application/json' \
        --data-raw '{
        "email":"ejoor@gmail.com",
        "password":"123456"
        }'

> #### Response

        {
        "message": "Login Successful",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaW5kVXNlciI6eyJfaWQiOiI2MTc0Mzc0ZDA2YzIxODFkZjQ2OTUzYjEiLCJlbWFpbCI6ImVqb29yQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJFVYemxSMm50RDJMY05rT09qOFFHNE9SYmIyeHEvNE00bWNCSC5yYTBXbmdEQVJsU3NtUFJLIiwidGFzayI6W10sImNyZWF0ZWRBdCI6IjIwMjEtMTAtMjNUMTY6MjQ6NDUuMDcxWiIsInVwZGF0ZWRBdCI6IjIwMjEtMTAtMjNUMTY6MjQ6NDUuMDcxWiIsIl9fdiI6MH0sImlhdCI6MTYzNTAwOTMwNiwiZXhwIjoxNjY2NTQ1MzA2fQ.kYy4vqBaOl9k3pW-81Zc8jw4cfZ9pcte9UwlgCiPkO4",
        "user": {
        "\_id": "6174374d06c2181df46953b1",
        "email": "ejoor@gmail.com",
        "password": "",
        "task": [],
        "createdAt": "2021-10-23T16:24:45.071Z",
        "updatedAt": "2021-10-23T16:24:45.071Z",
        "\_\_v": 0
        }
        }

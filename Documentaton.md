## How to Use the Todo API

> A collection of all API endpoints available to clients
> Baseurl (Production) => https://todoapibyejoor/api/v1

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17239043-92595580-0431-40bc-a5ee-c6c63239fd48?action=collection%2Ffork&collection-url=entityId%3D17239043-92595580-0431-40bc-a5ee-c6c63239fd48%26entityType%3Dcollection%26workspaceId%3Ddf838b84-f850-4a84-b191-449bfd6d91e9#?env%5BNew%20Environment%5D=W10=)

> ### ** API endpoint For Registration** >

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

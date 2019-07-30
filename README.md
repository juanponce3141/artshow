# Modern Art API

## General
This project provides API endpoints to postgres database.



## Requirement
Connection to instance of postgres database will be required. (Note: Our application does not configure Database or Tables, these were done directly with psql)

Configuration to database will have to be filled in db/query.js as this is handling database connection/querys to postgres.

Please fill in pool configration as seen below with own credentails to database.

Example : 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'art',
    password: 'someSecretPassword',
    port: 5433
});

## StartProject
start project with :
    
    node bin/www
    
    This is using the express layout.
    
## Success
- All but comments api endpoints work.     
## Problems/Issues
- I was not able to load dataset into database. I've worked on smaller datasets and haven't imported in recent time.
- As I wasn't able to load dataset, I wasn't able to build database initializer.
## API endpoints

default port : 

    3000

- URL :
    - /api/art
        - Method : 
            - GET, view the entire art data set
         - URL Params
            - None
    - /api/art/ID
        - Method : 
            - GET, view art data by ID
        - URL Params
            - id
    - /api/art/ID/comments 
        - Method : 
            - POST, add a comment for an art data entry
        - Request Body:
            - name
            - content
            - userID
    - /api/users 
        - Method : 
            - POST, create user
        - Request Body :
            - name
            - age
            - location
    - /api/users 
        - Method : 
            - GET, see all users
        - URL Params
            - None



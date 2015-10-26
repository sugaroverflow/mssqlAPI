> NodeJS  REST API  example using MSSQL, Express, and Seriate

# mssqlAPI

Instructions:

```
$ git clone https://github.com/SugarOverflow/mssqlAPI.git
$ cd mssqlAPI
$ npm install
$ node app.js
```

In a new terminal window:

```
$ CURL -X http://localhost:3000/test
```

## Dependencies
 - [NPM](https://www.npmjs.com/)
 - [Express](https://github.com/strongloop/express)
 - [Seriate](https://github.com/LeanKit-Labs/seriate)

### Notes

This was a proof of concept for using a mssql db with express. 
I wasn't able to use [node mssql](https://www.npmjs.com/package/mssql) easily so I built this.
Still needs work / not ready for production.
```schema.js``` contains some SQL queries setup with seriate for you to use for different routes.

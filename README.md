# disney-API
A RESTful API that allows you to get and modify all Disney World characters. Alkemy's Challenge Backend NodeJs (2022). Link to document: https://drive.google.com/file/d/1XCUYgTFaE9uBNI-FqKDWIa4RCztooz_X/view?usp=sharing.

## Installation

Once you have downloaded this repository you have to execute the following command in order to fetch all the dependencies of the `package.json` file. (installation from an existing project)

```
npm install
```

This project includes dependecies such as:
- NodeJs Framework: Express
- Environment variables: Dotenv
- ORM: Sequelize
- mySQL driver: mysql2
- JSON Web Token: jsonwebtoken
- Bcrypt: bcrypt
- SendGrid: @sendgrid/mail

## Run

```
npm start
```

## Environment Variables

See `.env.example` for more information on environment variables

Create a `.env` file in the root directory of the project and add the variables you need.


## Database
- Create the database schema only, do not need to create the tables.
- Configure the database options in the `.env` file, following the example options in the `.env.example` file.
- Run the application.
- Optional: to insert model data into the database:
-- change to ```await sequelize.sync({ force: false });``` in the `server.js` file
-- decoment line `require("./config/scripts/seeds");` in the `server.js` file.

--- Observation: if you do not want to drop and recreate the database tables anytime to the application runs,
you have to change to ```await sequelize.sync({ force: false });``` in the `server.js` file.

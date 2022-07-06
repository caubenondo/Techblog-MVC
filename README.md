# TechBook with MVC
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    [LIVE DEMO](https://rugged-redwood-90838.herokuapp.com/)
  ## Description
  This project is a simple social media application following the **Model-View-Controller** (MVC) paradigm. The app implements Sequelize as the ORM for querying the database to handle **Models** ; it uses template engine Handlebars.js to handle **Views**. The **Controller** handles input form the user, interacts with models to create, read, update, or delete data... via API routes of Expressjs.

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Questions](#Questions)

  ## Installation <a name='Installation'></a>
    To install necessary dependencies, run the following command:
  ###### Install npm packages
  ```
    npm i
  ```
  
  ###### Create database in mySQL
 ```
    mysql -u <username> -p
 ```
 ```
    source ./db/schema.sql
 ```
 ###### Connect mySQL database with .env file
  ```
    DB_USER=''
    DB_PW=''
    DB_NAME=''
  ```
  ###### Start server
```
npm run start
```
  
  ## Usage <a name='Usage'></a>
  it uses Handlebars, Express, Sequelize, mysql2, dotenv, bcrypt.
  
  ## License <a name='License'></a>
  The project is under [MIT](https://opensource.org/licenses/MIT) license.

  ## Contributing <a name='Contributing'></a>
  Feel free to contact me to contribute to the project.


  ## Questions <a name='Questions'></a>
  If you have any questions about the repo, open an issue or contact me directly at caubenondo@gmail.com.
  You can find more of my work at [caubenondo](https://github.com/caubenondo)

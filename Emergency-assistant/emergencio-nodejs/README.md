# Emergency assistant
Final assignment of Internet Engineering course spring 1399
We deployed our application into heroku platform.
* [This]() is the website link.
## General Description  
  The idea is to write an application that can be used in case of emergency situations. It suppose to help the team involved in the disaster situation such as earthquake to fill out reports about the situation and give a realistic view to the operation centres.

### Application users
We hava three types of user.
#### Field Agents 
They open the application and start to fill the available forms and submit their forms to server.

#### Control Centre Agent 
  They get list of forms in the system and if they click on each form they get list of all responds to that form. Also they can export result of reports to CSV file.

#### System Administrator
  This user creates a number of dynamic forms. 

## Getting started
  For development, you will only need __Node.js__ and a node global package, __npm__, installed in your environement. If you already have them skip    installation part.

### Installation
  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
If the installation was successful, you should be able to run the following command.

    ` node --version`

    ` $ npm --version`
    

### Running locally
Now that everything is setup get the Node server running locally by following these steps :
- Clone this repository 
- `npm install` to install all required dependencies
- Create a new file called `.env`
- We use Auth0 and MongoDB so before running application go to these websites and set things up.
- Create a new file called `.env`
- Add following to `.env` file
```sh
AUTH0_DOMAIN= /* Auth0 Domain */
API_IDENTIFIER= /* Auth0 identifier */
NODE_ENV= /* it should be development */
PORT= /* it should be 9000 */
MONGO_USER= /* database username */
MONGO_PASSWORD= /* database password */
MONGO_DB= /* database name */
```
- `npm start` to start the local server

Your app should now be running on [http://localhost:9000](http://localhost:9000).

### Dependencies
- [Express](https://github.com/expressjs/express) for router
- [Winston](https://github.com/winstonjs/winston) for logging
- [cors](https://www.npmjs.com/package/cors) to allows react requests to skip the Same-origin policy and access resources from remote hosts
- [dotenv](https://github.com/motdotla/dotenv)  to load environment variables
- [eslint](https://github.com/airbnb/javascript)  airbnd as linter
- [Auth0](https://auth0.com/) Auth0 for authentication
- [MongoDB](https://www.mongodb.com/) MongoDb Atlas as database
- [Graphql](https://graphql.org) GraphQL is a query language for APIs

### Application Structure
- `app.js` - The entry point to our application. This file defines our express server.
- `config/` -This folder contains a central location for configuration/environment variables.
- `resolver/` - This folder contains GraphQL query handlers.
- `schema/` - This folder contains GraphQL schemas.
- `model/` - This folder contains models for database.
- `util/` - This folder contains files for logging.

### Database
We used MongoDB Atlas as database. For each model there is a collection.

- Forms: Contains all empty forms information.
- FilledForm: Contains all filled forms.
- Area: Contains all areas.
- Role: Contains all users and their roles.

### Graphql
GraphQL is a query language for our API, and a server-side runtime for executing queries by using a type system we define('schema') for our data. A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.
Once a GraphQL service is running (typically at a URL on a web service), it can receive GraphQL queries to validate and execute. 
The most basic components of a GraphQL schema are object types, which just represent a kind of object you can fetch from your service, and what fields it has. 
as you see we have three main objects. Emptyforms, FilledForms and Areas. 

__FilledForm__
```
type FilledForm{
    _id: ID!
    title: String, 
    formId: String,
    fields: [FilledFormFields] 
}

type FilledFormFields{
    _id:ID!
    name: String,
    title: String,
    type: String,
    value : String
}
```
__Emptyforms__

```
    type Form { 
        _id: ID!
        title: String, 
        fields: [Fields ] 
    }

    type Fields { 
        _id: ID!
        name: String,
        title: String,
        type: String,
        required: Boolean
        options:[Option]
    }

    type Option {
        _id: ID!
        label: String,
        value: String
    }
```
__Area__
```
    type Area{
        _id: ID!
        title:String
        geoLocation:GeoLocation
    }

    type GeoLocation{
        type: String 
        properties : Property
        geometry :Geometry
    }

    type Property{
        name: String
    }

    type Geometry{
        type: String
        coordinates :[[[Float]]]
    }

```
__Person__
```
    type Person {
        id: ID!
        name: String!
        age: Int
    }
```

Most types in your our are just be normal object types, but there are two types that are special within it: Query , Mutation.
Every GraphQL service has a query type and may or may not have a mutation type.
A GraphQL __query__ is used to read or fetch values while a __mutation__ is used to write or post values. In either case, the operation is a simple string that a GraphQL server can parse and respond to with data in a specific format. 
```
    type Query {

        getAllFilledForms: [FilledForm!]!
        getAllEmptyForms: [Form!]!
        getAllAreas:[Area!]!
        getAllRoles:[Role!]!

        getFormById(id: String) : Form
        getFilledFormById(id: String): FilledForm
        getAreaById(id: String): Area
        getRoleById(id: String): Role

        getAreaByPoint(lat: Float! , long:Float!): [String]
        getRoleByUserName(userName: String): Role
        
    }
```
```
    type Mutation {
        createForm(form: FormInput): Form
        createFilledForm(filledForm:FilledFormInput): FilledForm
        createArea(area: AreaInput): Area
        createRole(role: RoleInput): Role
    }
```
#### Resolvers :
Resolvers provide the instructions for turning a GraphQL operation into data. They resolve the query to data by defining resolver functions.

  **./resolvers/forms-reolver.js**

   > getAllEmptyForms, createForm, getFormById, createFilledForm, getFilledFormById, getAllFilledForms

  **./resolvers/areas-resolver.js**
 
 >  getAreaByPoint, getAllAreas, createArea, getAreaById

  **./reolvers/roles-reolvers.js**

  > getRoleByUserName, getAreaById, getRoleById, createRole



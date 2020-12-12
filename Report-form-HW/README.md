# InternetEngineering_99
Fifth assignment of Internet Engineering course spring 1399

We deployed our application into heroku platform.
* [This](https://assignment5-backend-heroku.herokuapp.com/) is the Backend application link. 
* [This](https://assignment5-frontend-heroku.herokuapp.com/) is the Frontend application link. 
## General Description 
In this homework we had to  create a base UI for our application on client side. 
The general idea is that sys admin should be able to create user input forms and deploy them to server and client should be able to fetch the form descriptions and render proper forms in UI based on form descriptors. 
Also UI should be able to collect the information from those forms and send them back to server. 
## Getting started
### Running Locally
#### Backend part :
To get the Node server running locally:

- Clone this repo
- `cd backend`
- `npm install` to install all required dependencies
- Create a new file called `.env`
- Add `PORT` and `NODE_ENV` varible in `.env` file
- `npm start` to start the local server

```sh
git clone https://github.com/mahtab2/HW5_InternetEngineering_99.git # or clone your own fork
cd HW5_InternetEngineering_99
cd backend
npm install
npm start
```
Your app should now be running on [http://localhost:9000](http://localhost:9000).

#### Frontend part :
To get the React client running locally:

- Clone this repo
- `cd frontend`
- `npm run install` to install all required dependencies
- Create a new file called `.env`
- Add `GOOGLE_API_KEY` varible in `.env` file
- `npm start` to start the local server

```sh
git clone https://github.com/mahtab2/HW5_InternetEngineering_99.git # or clone your own fork
cd HW5_InternetEngineering_99
cd frontend
npm run install
npm start
```
Your app should now be running on [http://localhost:3000](http://localhost:3000).

### Deploying to Heroku
This app is set up for deployment to Heroku!

_This assumes you have already have a Heroku account and have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed_
```
 heroku login
 heroku create -a name-of-your-app
 git push heroku master
 heroku open
```
## Form Descriptor 
Each form is a list of fields to be displayed on client UI. Here is the list of field types that can be added to the forms : 
* Text Input: Simple text input  
* Number: Any positive and negative float number 
* Date : A date picker. The value of this field is a *YYYY-MM-DD* string 
* Location : A field that once clicked shows a Map and user can select a location there or can select to send current device location. The value of this field is an object with *long* and *lat* fields. 
## App UI 
Once the app is loaded it will fetch the list of the forms from server. The list of the forms is available in your backend at */api/forms*  it will return the List of the form description URLs the form description details must be available on */api/forms/\<id\>* of the form  and it will return the form descriptor of the specified form. 

In the first page we desplayed the form  titles  and once a you clicked / touched the form. It will open the form for you to start entering data. Then you will be able to submit the form to backend. The backend will display proper information in the console to show successful submission of the form. 
## Backend
### Dependencies
- [Express](https://github.com/expressjs/express) for router
- [Winston](https://github.com/winstonjs/winston) for logging
- [cors](https://www.npmjs.com/package/cors) to allows react requests to skip the Same-origin policy and access resources from remote hosts
- [node-fetch](https://www.npmjs.com/package/node-fetch) to fetch data from external source.
- [dotenv](https://github.com/motdotla/dotenv)  to load environment variables
- [eslint](https://github.com/airbnb/javascript)  airbnd as linter

### Application Structure
- `app.js` - The entry point to our application. This file defines our express server . It also requires the routes we'll be using in the application.
- `public/` -This folder contains static files such ass images and css stylesheets.
- `view/` -This folder contains pages and partials for ejs templates.
- `config/` -This folder contains a central location for configuration/environment variables.
- `route/` - This folder contains the route definitions for our API.
- `controller/` - This folder contains Controller functions for handling requests.
- `util/` - This folder contains files for validation and logging.

### APIs
* A GET `/api/forms` : return all forms' description in JSON format.
* A GET `/api/forms/:id` : return form's description with requested id in JSON format.
* A POST `/api/post_form` : When a form is submitted, form's data will be sent to backend.
* A POST `/api/admin` : Admin can add a new form.

## Frontend
### Dependencies
- [react hooks](https://reactjs.org/docs/hooks-intro.html) for use state and other React features without writing a class
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) as router
- [antd](https://ant.design/) as material design
- [formik](https://jaredpalmer.com/formik/docs/overview) for handling form creation
- [yup](https://www.npmjs.com/package/yup)  for value parsing and validation
- [google-map-react](https://www.npmjs.com/package/google-map-react)  to get location from google map
- [prittier](https://prettier.io/) as code formatter
- [eslint](https://github.com/airbnb/javascript)  airbnd as linter

### Application Structure
- `app.js` - The entry point to our application.
- `container/` -This folder contains home , forms , form pages
- `container/home` - Home page
- `container/forms` - List of forms page
- `container/form` - Form edit page
- `component/` -This folder contains components for handling locations
- `component/map` -This folder contains components for map when location has no options
- `component/maps` -This folder contains components for map when location has options

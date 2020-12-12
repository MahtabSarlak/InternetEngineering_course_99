# HW4_InternetEngineering_99
Fourth assignment of Internet Engineering course spring 1399.

We deployed our application into heroku platform.
[This](https://covid19-tracker-application.herokuapp.com/) is the application link. 

## General Description 
In this HW we built a website to show the latest statistics of COVID-19 all over the world. For the latest information we made an API call to external system and rendered an HTML result and showed it to user. 

## Getting started
### Running Locally

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Create a new file called `.env`
- Add `PORT` and `NODE_ENV` varible in `.env` file
- `npm start` to start the local server

```sh
git clone https://github.com/mahtab2/HW4_InternetEngineering_99.git # or clone your own fork
cd HW1_InternetEngineering_99
npm install
npm start
```
Your app should now be running on [http://localhost:3000](http://localhost:3000).

### Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

## APIs 
We connected to get the latest information for all countries here [http://covid19api.xapix.io/v2/locations] and populated our template with information and returned it to user.  We use  ```node-fetch``` to fetch data from external source.
## Dependencies

- [Express](https://github.com/expressjs/express) for router
- [Winston](https://github.com/winstonjs/winston) for logging
- [ejs](https://www.npmjs.com/package/ejs) for rendering templates
- [node-fetch](https://www.npmjs.com/package/node-fetch) to fetch data from external source.
- [dotenv](https://github.com/motdotla/dotenv)  to load environment variables
- [eslint](https://github.com/airbnb/javascript)  airbnd as linter

## Application Structure
- `app.js` - The entry point to our application. This file defines our express server . It also requires the routes we'll be using in the application.
- `public/` -This folder contains static files such ass images and css stylesheets.
- `view/` -This folder contains pages and partials for ejs templates.
- `config/` -This folder contains a central location for configuration/environment variables.
- `route/` - This folder contains the route definitions for our API.
- `controller/` - This folder contains Controller functions for handling requests.
- `util/` - This folder contains files for validation and logging.

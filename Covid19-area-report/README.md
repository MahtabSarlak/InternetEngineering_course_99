# HW1_InternetEngineering_99
First assignment of Internet Engineering course spring 1399.

We deployed our application into heroku platform.
[This](https://assignment1-heroku.herokuapp.com/) is the application link. 

## General Description 
We had to run a webserver in NodeJS that performs some GIS functionality. The GIS information was given to us as a JSON file. We had to load the file in memory once the server is booting. Then each request that came to server we had to process the data and return appropriate response. 

In server initial input file we will be receiving number of polygons with it's GPS coordinates (lat, long). The basic functionality is to be given a GPS coordinate and tell which polygons the point is inside them.  

## Getting started
### Running Locally

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Create a new file called `.env`
- Add `PORT` and `NODE_ENV` varible in `.env` file
- `npm start` to start the local server

```sh
git clone https://github.com/mahtab2/HW1_InternetEngineering_99.git # or clone your own fork
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
We had to write number of HTTP API endpoints that can be called by any Http client. 

* A GET (/gis/testpoint) endpoint that receives a pair of parameters (lat, long) and returns a JSON structure which has a member called polygons and it contains the name of the polygons that the point is inside them 
* A PUT (/gis/addpolygon) endpoint that we can add a new polygon to server for subsequent get calls. 
## Dependencies

- [Express](https://github.com/expressjs/express) for router
- [Winston](https://github.com/winstonjs/winston) for logging
- [Turf](https://github.com/Turfjs/turf0) for performing geo spatial functionalities
- [express-validator](https://github.com/express-validator/express-validator) for param validating
- [geojson-validation](https://github.com/craveprogramminginc/GeoJSON-Validation) for param validating
- [dotenv](https://github.com/motdotla/dotenv)  to load environment variables
- [eslint](https://github.com/airbnb/javascript)  airbnd as linter

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server . It also requires the routes we'll be using in the application.
- `config/` -This folder contains a central location for configuration/environment variables.
- `route/` - This folder contains the route definitions for our API.
- `service/` - This folder contains files and methods that implement our app’s core logic.
- `controller/` - This folder contains Controller functions for handling requests.
- `repository/` - This folder contains files and methods for working with database(here JSON file).
- `util/` - This folder contains files for validation and logging.

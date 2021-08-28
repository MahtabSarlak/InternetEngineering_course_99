# Emergency assistant (React)
Emergencio is created to help agents to increase the speed of helping people in emergency situations.
It can be found *[HERE](https://emergencio.herokuapp.com/)

### Forms
The whole idea of the app spins around creating forms, filling them and finaly controliing and analyzing them.

### Users
There are three types of users who have their own responsibilities and accessabilities to different parts of the application. 

### Tools
We made this application using React and to communicate with the main server we used GrapghQL and Auth0 for authentication and authorization.

### Why React?
When it comes to forms and transfering them between a client and a backend-server, React is a clear choice for many developers. It has a great community and a is relativly easy to learn.

### Why Graphql?
Well first of all it's new; and new things are fun to learn but in case of GraphQL is actually is a really powerfull and convinient to use tool. It gives the developer a dicipline to code in and makes us really feel the importance of every entity in the application;

### Responsiveness
We tried to make this app as responsive as possible. To achive our goal we made the most we could out of CSS's media queries. So it fits well on mobile devices.

### Main Dependencies
- [Appolo](https://www.apollographql.com) The main library that let us use GraphQL.
- [Auth0](https://auth0.com/) Auth0 for authentication and authorization.
- [MaterialUI](https://material-ui.com/) The one and only MUI for giving the app a nicer touch.
- [Google-Maps-React](https://github.com/fullstackreact/google-maps-react) A helper library that lets us use google map api easily in react

### Path Structure
- `/` - The main page that contains a card to login or logout. (Public Access)
- `/fill-forms` - A page containing a list of forms that are ready to be filled. (FieldAgent Access)
- `/fill-forms/:formId` - Each form can be filled and submitted in this page. (FieldAgent Access)
- `/reports` - A page containing a list of forms and details about how different isers filled them. (ControlAgent Access)
- `/reports/:formId` - A table of all the records submited for a single form. (ControlAgent Access)
- `/reports/details/:formId` - The complete presentation of a submitted form. (ControlAgent Access)


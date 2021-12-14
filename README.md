# The Mirror Test
## A test that provides a deeper understanding of who you are
This is a full-stack project, soon to be hosted on a custom domain, aimed to provide a series of five questionnaires, for people to better understand their personality
and their views.

## For Developers
React.js along with Material-ui has been used for the design and the frontend. Localstorage is used extensively to keep track of session tokens to verify the user at each stage.
An express server has been setup to calculate results for each questionnaire, and for verifying the session token. 
To get started, clone the repository, navigate inside the client folder and use ``` npm install ``` to install the necessary client-side dependencies. After that,
use ``` npm start ``` to begin.
Outside the client folder, use ``` npm install ``` to install the required server-side dependencies, and hit ``` node app.js ``` to start the server.
**Make sure to change the routes in the client files to whichever port your server runs on, either by changing each file independantly or by providing a proxy in
client/package.json.**

## Future Goals
Node.js will be connected to a MongoDB database using Mongoose, to store responses of users to implement auto-save and auto-reminder features.


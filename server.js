// Setup empty JS object to act as endpoint for all route
projectData = {};

// Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static(__dirname + '/public'));

// Spin up the server
const port = 3000;
const server = app.listen(port, listening);

function listening() {
    console.log(`the port of this server is ${port}`);
}


// Initialize all route with a callback function

// // Callback function to complete GET '/all'
app.get("/data", (req, res) => {
    res.send(projectData);
})

// function sendData(req, res) {
//     res.send(projectData);
// };

// Post Route
app.post('/api', (req, res) => {
    // console.log(req.body);
    projectData = {
        temp: req.body.temp,
        date: req.body.date,
        feeling: req.body.feeling
    }
    console.log(projectData)

})

// function addUserResponse(req, res) {
//     data.push(req.body);
// }
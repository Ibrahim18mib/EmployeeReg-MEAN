var express = require('express');
var server = express();
var mongoose = require('mongoose');
const routes = require('./routes/routes');

const cors = require('cors');;


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Random-company", { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database Connected Succeessfully...")
    } catch (error) {
        console.error("Dataabse Fetching hte error", error)
    }
}

connectDB();

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(8080, (res, error) => {
    if (error) {
        console.log("Server in Error");;
    } else {
        console.log("Server Connected")
    }
})

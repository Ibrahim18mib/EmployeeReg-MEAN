var userServ = require('./userService')


const getDataControllerfn = async (req, res) => {
    var empDetails = await userServ.getDataFromDBService();
    res.send({ "status": true, "data": empDetails });
}

var createUserControllerFn = async (req, res) => {
    var status = await userServ.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}

var updateUserController = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    var result = await userServ.updateUserDBService(req.params.id, req.body);
    if (result) {
        res.send({ "status": true, "message": "User Updateeeedddddd" });
    } else {
        res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
    }
}
var deleteUserController = async (req, res) => {
    console.log(req.params.id);
    var result = await userServ.removeUserDBService(req.params.id);
    if (result) {
        res.send({ "status": true, "message": "User Deleteddd" });
    } else {
        res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
    }
}


module.exports = { getDataControllerfn, createUserControllerFn, updateUserController, deleteUserController };
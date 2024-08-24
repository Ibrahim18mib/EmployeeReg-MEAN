var userModel = require('./userModel')

//GetUsers

module.exports.getDataFromDBService = async (req, res) => {

    try {
        let users = await userModel.find({});
        return users;

    } catch (error) {
        console.error('Error Getting user:', error);
        return false;
    }


}

//CreateUser


module.exports.createUserDBService = async (userDetails) => {

    try {
        const userModelData = new userModel({
            name: userDetails.name,
            address: userDetails.address,
            phone: userDetails.phone
        });
        await userModelData.save();
        return true;

    } catch (error) {
        console.error('Error saving user:', error);
        return false;
    }


}

//UpdateUsers
module.exports.updateUserDBService = async (id, userDetails) => {
    
    try {
        let result = await userModel.findByIdAndUpdate(id, userDetails, { new: true });;
        return result;

    } catch (error) {
        console.error('Error Updating user:', error);
        return false;
    }

}

//remove User
module.exports.removeUserDBService = async (id) => {
    try {
        let result = await userModel.findByIdAndDelete(id);
        return result;

    } catch (error) {
        console.error('Error Deleting user:', error);
        return false;
    }


}
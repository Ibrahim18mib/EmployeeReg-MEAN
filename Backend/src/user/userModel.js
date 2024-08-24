var mongoose = require('mongoose');;
var schema = mongoose.Schema;;

var userschema = new schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('employees', userschema);
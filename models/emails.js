
var mongoose = require('mongoose');


var emailSchema = mongoose.Schema({
    email: String,
});

var emailModel = mongoose.model('emails', emailSchema);

module.exports = emailModel;

const monk = require('monk');
const db = monk('mongodb+srv://josegerdes:oiD0BWQ3BIVwlTh9@cluster0-con3n.mongodb.net/test?retryWrites=true&w=majority');

module.exports = db;
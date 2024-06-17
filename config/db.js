// config/db.js
const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/UserDB';

mongoose.connect(dbURI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

module.exports = db;

require('dotenv').config();
const mongoose = require('mongoose');

const { ELECTROBOL_MONGODB_HOST, ELECTROBOL_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${ELECTROBOL_MONGODB_HOST}/${ELECTROBOL_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
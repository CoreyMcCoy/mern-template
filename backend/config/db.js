// Description: This file is used to connect to the MongoDB database.
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;

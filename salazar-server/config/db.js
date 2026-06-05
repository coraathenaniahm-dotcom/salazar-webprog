const mongoose = require('mongoose');

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is not defined. Set it in Vercel environment variables.');
    }

    const options = {
        serverSelectionTimeoutMS: 10000,
    };

    if (process.env.MONGO_DB_NAME) {
        options.dbName = process.env.MONGO_DB_NAME;
    }

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, options);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        throw error;
    }
};

module.exports = connectDB;
const mongoose = require('mongoose');

const options = {
    serverSelectionTimeoutMS: 10000,
    bufferCommands: false,
};

if (process.env.MONGO_DB_NAME) {
    options.dbName = process.env.MONGO_DB_NAME;
}

const cached = global.mongoose || (global.mongoose = { conn: null, promise: null });

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is not defined. Set it in Vercel environment variables.');
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGO_URI, options)
            .then((mongooseInstance) => {
                return mongooseInstance;
            })
            .catch((error) => {
                cached.promise = null;
                throw error;
            });
    }

    cached.conn = await cached.promise;
    console.log(`MongoDB Connected: ${cached.conn.connection.host}`);
    return cached.conn;
};

module.exports = connectDB;
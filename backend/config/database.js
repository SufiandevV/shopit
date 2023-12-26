const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.DB_LOCAL_URI, {
            
            // Use the new option autoIndex instead of useCreateIndex and createIndexes
            autoIndex: true
        });
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = connectDB;

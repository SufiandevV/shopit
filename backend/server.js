const app = require('./app');
const connectDB = require('./config/database');

const dotenv = require('dotenv');


// setting up config file
dotenv.config({ path: 'backend/config/config.env' });


// Connect to database
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
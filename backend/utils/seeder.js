const Product = require('../models/product');
const dotenv = require('dotenv');

const products = require('../data/products');
const { connect } = require('mongoose');
const connectDB = require('../config/database');

// setting dotenv for config file

dotenv.config({ path: 'backend/config/config.env' });

connectDB();

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log('Products are deleted');

        await Product.insertMany(products);
        console.log('All Products are added.');

        process.exit();

    } catch (error) {
        console.error(error.message);
        process.exit();
    }
}

seedProducts();
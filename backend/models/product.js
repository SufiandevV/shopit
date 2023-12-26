const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    
    price : {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product price cannot exceed 5 characters'],
        default: 0.0
    },  

    description : {
        type: String,
        required: [true, 'Please enter product description'],
    },

    rating : {
        type: Number,
        required: [true, 'Please enter product rating'],
        maxLength: [5, 'Product rating cannot exceed 5 characters'],
        default: 0.0
    },

    Images : [
        {
            public_id: {
                type: String,
                required: true
            },
            url : {
                type: String,
                required: true
            }
        }
    ],
    
    category : {
        type: String,
        required: [true, 'Please select product category'],
        enum: {
            values : ['Electronics', 'Cameras', 'Laptops', 
            'Accessories', 'Headphones', 'Food', 'Books', 
            'Clothes/Shoes', 'Beauty/Health', 
            'Sports', 'Outdoor', 'Home']
        } // Add closing square bracket here
    },

    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },

    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },

    numOfReviews: {
        type: Number,
        default: 0
    },

    reviews: [
        {
            name: {
                type: String,
                required: [true, 'Please enter product review name']
            },
            rating: {
                type: Number,
                required: [true, 'Please enter product review rating']
            },
            comment: {
                type: String,
                required: [true, 'Please enter product review comment']
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
    },

    phoneNumber: {
        type: Number,
    },

    age: {
        type: Number,
    },

    vehicle: {
        type: String,
    },

    employmentStatus: {
        type: String,
        enum: ['employed', 'unemployed'],
    },

    bloodGroup: {
        type: String,
    },

    occupation: {
        type: String,
        // require: true,
    }

});

module.exports = userSchema;

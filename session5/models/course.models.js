const mongoose = require('mongoose');
// const { type } = require('os');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});


module.exports = mongoose.model("course", courseSchema);
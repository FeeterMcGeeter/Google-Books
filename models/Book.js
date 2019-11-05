const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {
        type: String,
        unique: true
    },
    
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false
    },

    image: {
        type: String,
        required: false
    },

    link: {
        type: String,
        required: false
    },

    date: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
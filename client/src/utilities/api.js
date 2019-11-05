import axios from 'axios';

export default {
    // GETTING BOOKS FROM GOOGLE SEARCH
    getGoogleBooks: function(query) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query);
    },
    // GETTING ALL BOOKS
    getBooks: function() {
        return axios.get('/api/books');
    },
    // // GETTING BOOKS BY ID
    // getBookById: function(id) {
    //     return axios.get('/api/books/' + id);
    // },
    // SAVING A BOOK TO THE DATABASE
    saveBook: function(bookData) {
        return axios.post('/api/books/', bookData);
    },
    // DELETING A BOOK BY ID
    deleteBook: function(id) {
        return axios.delete('/api/books/' + id);
    }
};
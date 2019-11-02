import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import API from '../../utilities/api';
import ResultsCard from '../ResultsCard/ResultsCard';
import SearchForm from '../SearchForm/SearchForm';

class Search extends Component {
    state = {
        books: [],
        results: [],
        title: ''
    }

    componentDidMount() {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data });
                console.log('Books: ', this.state.books)
            })
            .catch(err => {
                throw err;
            })
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleBooks(this.state.title)
            .then(res => {
                console.log(res.data);
                this.setState({ results: res.data.items })
            })
            .catch(err => {
                throw err;
            })
    };

    handleSavedBooks = event => {
        event.preventDefault();
        const bookId = event.target.getAttribute('data-id');
        // console.log(bookId);
        const newState = { ...this.state };

        let targetBook = this.state.results.find(book => book.id === bookId);

        const newBook = {
            title: targetBook.volumeInfo.title,
            author: targetBook.volumeInfo.author,
            description: targetBook.volumeInfo.description,
            image: targetBook.volumeInfo.imageLinks.thumbnail,
            link: targetBook.volumeInfo.infoLink
        };

        if (this.state.books[bookId]) {
            console.log('Book already saved!');
            return
        } else {
            newState.books[bookId] = newBook;
            this.setState(newState);
             
            API.saveBook(newBook)
            .then(console.log)
        }
    };

    render() {
        return (
            <>
            <Navbar />
            <div className='container'>
                <Jumbotron />
                    <SearchForm 
                        handleFormSubmit = {this.handleFormSubmit}
                        handleInputChange = {this.handleInputChange} />
                        <div className='results-container' id='mainContent'>
                            {this.state.results.map((book) => {
                                return (
                                    <ResultsCard
                                        key= {book.id}
                                        title= {book.volumeInfo.title}
                                        id= {book.id}
                                        link= {book.volumeInfo.infoLink}
                                        authors= {book.volumeInfo.authors && book.volumeInfo.authors[0]}
                                        image= {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
                                        description= {book.volumeInfo.description}
                                        saveBook= {this.handleSavedBooks}
                                    />
                                )
                            })}
                        </div>
            </div>
            </>
        )
    }
};

export default Search;
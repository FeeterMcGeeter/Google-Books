import React, { Component } from "react";
import Navbar from '../Navbar/Navbar'
import Jumbotron from '../Jumbotron/Jumbotron'
import API from '../../utilities/api';
import ResultCard from "../ResultsCard/ResultsCard";

class Saved extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        API.getBooks()
            .then(res => {
                this.setState({ results: res.data });
            })
            .catch(err => {
                console.log(err);
            })
    };

    handleDeleteBook = (event, bookID) => {
        event.preventDefault();
        const newState = { ...this.state };
        newState.results = this.state.results.filter(book => book._id !== bookID)

        API.deleteBook(bookID).then(
            (data) => {
                this.setState(newState)
                console.log(data);

            }
        ).catch((err) => {
            console.log(err);
        }
        );
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <Jumbotron />
                        <h3>Saved Books</h3>
                        <div className='container-fluid' id='mainContent'>
                            {this.state.results.map((book) => {
                                const { _id, ...bookInfo } = book;
                                return (
                                    <ResultCard
                                        key={_id}
                                        id={_id}
                                        {...bookInfo}
                                        deleteBook={this.handleDeleteBook}
                                    />
                                )
                            })}
                        </div>
                </div>
            </div>
        );
    }
};

export default Saved;
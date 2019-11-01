import React from 'react';

const SearchForm = (props) => {
    return (
        <div className='text-center' id='searchForm'>
            <input className='form-control' name='title' placeholder='Book name here...' type='text'
                   onChange={props.handleInputChange}></input>
            <br></br>
            <button className='btn' id='searchBtn' onClick={props.handleFormSubmit} type='submit'>Search</button>
        </div>
    )
};

export default SearchForm;
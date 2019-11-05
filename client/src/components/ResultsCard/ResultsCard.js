import React from 'react';
import Button from '../Button/Button'

const ResultsCard = ({ title, link, id, authors, image, description, saveBook, deleteBook }) => {
    if (!saveBook) {
        return (
            <div id='resultCard'>
                <div className='row text-center' id='resultHeader'>
                    <div className='col-3'>
                        <h4>{title}</h4>
                        <small>
                            <br />Written By:
                        <br />{authors}</small>
                    </div>
                    <span className='col-3 offset-6'>
                        <Button
                            href={link}
                        >View
                        </Button>
                        <Button
                            id={id}
                            onClick={(event) => deleteBook(event, id)}
                        >Delete
                        </Button>
                    </span>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-3 text-center'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='col-9'>
                        <p className='lead'>Description: </p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id='resultCard'>
                <div className='row text-center' id='resultHeader'>
                    <div className='col-3'>
                        <h4>{title}</h4>
                        <small>
                            <br />Written By:
                        <br />{authors}</small>
                    </div>
                    <span className='col-3 offset-6'>
                        <Button
                            href={link}
                        >View
                        </Button>
                        <Button
                            id={id}
                            onClick={(event) => saveBook(event)}
                        >Save
                        </Button>
                    </span>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-3 text-center'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='col-9'>
                        <p className='lead'>Description: </p>
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}


export default ResultsCard;
import React from 'react';
import SingleBook from './SingleBook'


const BookRow = function(props){
    let onChangeBookFromShelf = (book, shelf) => {
        console.log("I'm supposed to get the information here");
        console.log(book, shelf);
        props.onUpdateShelfStatus(book, shelf);
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => (
                        <li key={book.id}>
                            <SingleBook
                                book={book}
                                changeBookFromShelf={onChangeBookFromShelf}
                            />
                        </li>
                    ))}
                </ol>
            </div>

        </div>
    )
}

export default BookRow;
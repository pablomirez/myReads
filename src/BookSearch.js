import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleBook from "./SingleBook";

class BookSearch extends Component {

    state = {
        query: '',
        selectedBook: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }


    onChangeBookFromShelf = (book, shelf) => {
        this.props.changeShelfState(book, shelf);
    }
    render(){
        const { query } = this.state
        const { books } = this.props

        const showingSearchedBooks = query === '' ? books :
            books.filter((c) => (
                c.title.toLowerCase().includes(query.toLowerCase())
            ));
        
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {showingSearchedBooks.map((book) => (
                        <li key={book.id}>
                            <SingleBook
                                book={book}
                                changeBookFromShelf={this.onChangeBookFromShelf}
                            />
                        </li>
                    ))}
                    </ol>

                </div>
            </div>
        )
    }
}

export default BookSearch;



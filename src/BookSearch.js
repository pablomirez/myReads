import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookSearch extends Component {

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
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
                    {/*<ol className="books-grid">
                        {showingSearchedBooks.map((book)=> (
                            <li key={book.id}>
                                <div>
                                    <p>{book.title}</p>
                                </div>
                            </li>
                        ))}
                    </ol>*/}
                    <ol className="books-grid">
                    {showingSearchedBooks.map((book) => (
                        <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover"
                                             style={{
                                                 width: 128,
                                                 height: 193,
                                                 backgroundImage:  `url(${book.imageLinks.thumbnail})` }}>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                        </li>
                    ))}
                    </ol>

                </div>
            </div>
        )
    }
}

export default BookSearch;



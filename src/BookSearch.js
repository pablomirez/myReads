import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleBook from "./SingleBook";
import * as BooksAPI from "./BooksAPI"

class BookSearch extends Component {

    state = {
        Books: [],
        query: '',
        selectedBook: '',
        OrganizedBooks: this.props.books

    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))

        if(query.length > 2){
            this.searchBook(query)
        } else {
            this.setState(() => ({
                Books: []
            }))

        }
    }

    searchBook = (query) => {

        if(query.length > 0){
            BooksAPI.search(query).then((books) => {
                if(books.length > 0){
                    //books = books.filter((book) => (book.imageLinks))
                    books = this.setNoneShelf(books)
                    this.setState(() => {
                        return { Books: books}

                    })
                } else {
                    this.setState(() => {
                        return { Books: []}
                    })
                }
            })
        }

    }

    setNoneShelf = (books) => {
        //Now I need to set up all this books to have a none shelf
        for(let book of books){
            let isBookSetup = false
            isBookSetup = this.alreadySelectedBookStatus(book);
            if(!isBookSetup){
                book.shelf = "none";
            }
        }
        return books;
    }

    onChangeBookFromShelf = (book, shelf) => {
        this.props.changeShelfState(book, shelf);
    }


    //Observes if the book throw from the search already has not a shelf status;
    alreadySelectedBookStatus = (book) => {
        let bookHasbeenSelected = false;
        for(let bookProp of this.state.OrganizedBooks) {
            if (bookProp.id == book.id) {
                bookHasbeenSelected = true;
                book.shelf = bookProp.shelf;
            }
        }
        return bookHasbeenSelected;
    }


    render(){
        const { query } = this.state
        const { books } = this.props

        let showingSearchedBooks = this.state.Books;

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
                        { showingSearchedBooks.length > 0  ? showingSearchedBooks.map((book) => (
                            <li key={book.id}>
                            <SingleBook
                            book={book}
                            changeBookFromShelf={this.onChangeBookFromShelf}
                            />
                            </li>
                            )) : ''
                        }
                    </ol>

                </div>
            </div>
        )
    }
}

export default BookSearch;



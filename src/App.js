import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import BookSearch from './BookSearch'

class BooksApp extends Component {
  state = {
    showSearchPage: false,
    books: [],
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
  }


  changeShelf = (book, shelf) => {
    let bookObject = book.props.book;
    bookObject.shelf = shelf;
    BooksAPI.update(bookObject, shelf);
    this.setState( (currtState) => ({
      books: currtState.books.filter( (b) => b.id !== bookObject.id).concat([bookObject])
    }))

  }

  render() {
    return (
        <div className="app">
            <Router>
                <div>
                <Route exact path="/" render={() => (
                    <BookShelf books={this.state.books} changeShelfState={this.changeShelf}/>
                )}/>
                    {/*<Route path="/search" component={BookSearch}/>*/}
                <Route path="/search" render={() => (
                    <BookSearch books={this.state.books} />
                )}/>
                <div className="open-search">
                    <Link to='search'>
                        <button>Add a book</button>
                    </Link>
                </div>
                </div>
            </Router>
      </div>
    )
  }
}

export default BooksApp

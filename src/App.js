import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import BookSearch from './BookSearch'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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

  redirect = () => {
    console.log("I'm being called");
    return <Redirect to='/search'/>
  }

  render() {
    return (
        <div className="app">
          <Router>
            <Switch>
              <Route exact path="/" render={() => (
                  <BookShelf books = {this.state.books} changeShelfState = {this.changeShelf} />
              )} />
              <Route path="/search" component={ BookSearch }/>
            </Switch>
          </Router>
          {/*{this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf books = {this.state.books} changeShelfState = {this.changeShelf} />
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}*/}

          <div className="open-search">
            <button onClick={this.redirect}>Add a book</button>
            {/*<Router>
            <Link to='search'>Add a book</Link>
            </Router>*/}
          </div>


      </div>
    )
  }
}

export default BooksApp

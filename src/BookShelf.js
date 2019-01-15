import React, { Component } from 'react';
import BookRow from './BookRow';

class BookShelf extends Component {

    updateShelfStatus = (book, shelf) => {
        this.props.changeShelfState(book, shelf);


    }

    render(){
        return(
            <div className="list-books-content">
                <div>
                    <BookRow
                        title="Currently Reading"
                        books={this.props.books.filter(bk => bk.shelf === "currentlyReading")}
                        onUpdateShelfStatus={this.updateShelfStatus}
                    />
                    <BookRow
                        title="Want to Read"
                        books={this.props.books.filter(bk => bk.shelf === "wantToRead")}
                        onUpdateShelfStatus={this.updateShelfStatus}
                    />
                    <BookRow
                        title="Read"
                        books={this.props.books.filter(bk => bk.shelf === "read")}
                        onUpdateShelfStatus={this.updateShelfStatus}
                    />
                </div>
            </div>
        )
    }
}

export default BookShelf;
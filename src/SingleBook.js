import React, {Component} from 'react';

class SingleBook extends Component {

    shelfChange = (e)=> {
        let newShelfStatus = e.target.value;
        this.props.changeBookFromShelf(this, newShelfStatus)
    }

    render(){
        return(
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                             style={{
                                 width: 128,
                                 height: 193,
                                 backgroundImage: typeof this.props.book.imageLinks != 'undefined' ? `url(${this.props.book.imageLinks.thumbnail})` : '' }}>

                        </div>
                        <div className="book-shelf-changer">
                            <select onChange={this.shelfChange} defaultValue={this.props.book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>/
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </div>
        )
    }
}
export default SingleBook;
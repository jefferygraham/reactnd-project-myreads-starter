import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types'

class Shelf extends Component {

    changeStatus = (newShelf, bookId) => {
        let book = this.props.books.filter((book) => book.id === bookId);
        this.props.changeShelf(book, newShelf);
    }

    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.shelfProp}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.filter((book) => book.shelf === this.props.shelfProp).map((book) => (
                                <Book
                                    title={book.title}
                                    authors={book.authors}
                                    thumbnail={book.imageLinks.thumbnail}
                                    shelf={book.shelf}
                                    changeStatus={this.changeStatus}
                                    key={book.id}
                                    id={book.id}
                                />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

Shelf.propTypes = {
    shelfProp: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Shelf;
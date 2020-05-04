import React, { Component } from 'react'

import Book from './Book'

class BookShelf extends Component {
    changeBookShelf = (newShelf, bookId) => {
        let book = this.props.books.filter((book) => book.id === bookId);
        this.props.changeShelf(book, newShelf);
    }
    render() {
        const { books, shelf } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter(book => (book.shelf === shelf.id)).map(book => (
                            <Book changeBookShelf={this.changeBookShelf} key={book.id} book={book} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
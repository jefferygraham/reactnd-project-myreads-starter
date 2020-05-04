import React, { Component } from 'react'

import Book from './Book'

class BookShelf extends Component {
    changeShelf = () => {
        this.props.moveBook()
    }
    render() {
        const { books, shelf } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter(book => (book.shelf === shelf.id)).map(book => (
                            <Book changeShelfStatus={this.changeShelf} key={book.id} book={book} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
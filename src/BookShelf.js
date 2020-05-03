import React, { Component } from 'react'

import Book from './Book'

class BookShelf extends Component {
    render() {
        console.log(this.props.books)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter(book => (book.shelf === this.props.shelf.id)).map(book => (
                            <Book key={book.id} book={book} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
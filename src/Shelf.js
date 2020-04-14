import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.shelfProp}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.filter((book) => book.shelf === this.props.shelfProp).map((book) => (
                                <li key={book.id}>
                                    <Book
                                        title={book.title}
                                        authors={book.authors}
                                        thumbnail={book.imageLinks.thumbnail}
                                    />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelf;
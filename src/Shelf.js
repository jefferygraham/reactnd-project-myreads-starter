import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {

    changeStatus = (newShelf, bookId) => {
        this.props.changeShelf(newShelf, bookId);
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

export default Shelf;
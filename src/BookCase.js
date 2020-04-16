import React, { Component } from 'react';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';

class BookCase extends Component {
    static defaultProps = {
        shelf1: { id: 'currentlyReading', shelfTitle: 'Currently Reading' },
        shelf2: { id: 'wantToRead', shelfTitle: 'Want to Read' },
        shelf3: { id: 'read', shelfTitle: 'Read' }
    }

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }

    changeShelf = (updatedBook, newShelf) => {
        BooksAPI.update(updatedBook, newShelf)
            .then(data => {
                let books = [...this.state.books];
                let index = books.findIndex(book => book.id === updatedBook[0].id);
                books[index].shelf = newShelf;
                this.setState({ books });
            })
    }

    render() {
        return (
            <div className="list-books-content">
                <div>
                    <Shelf shelf={this.props.shelf1} books={this.state.books} changeShelf={this.changeShelf} />
                    <Shelf shelf={this.props.shelf2} books={this.state.books} changeShelf={this.changeShelf} />
                    <Shelf shelf={this.props.shelf3} books={this.state.books} changeShelf={this.changeShelf} />
                </div>
            </div>
        )
    }
}


export default BookCase;
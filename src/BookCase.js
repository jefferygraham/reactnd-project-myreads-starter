import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

import BookShelf from './BookShelf'

class BookCase extends Component {
    static defaultProps = {
        shelves: [
            { id: 'currentlyReading', name: 'Currently Reading' },
            { id: 'wantToRead', name: 'Want to Read' },
            { id: 'read', name: 'Read' },
        ]
    }

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(books => {
                this.setState({
                    books: books
                })
            })
    }

    rearrangBooks = () => {
        console.log('rearranging')
    }
    render() {
        return (
            <div className="list-books-content">
                <div>
                    {this.props.shelves.map(shelf => (
                        <BookShelf
                            moveBook={this.rearrangBooks}
                            key={shelf.id}
                            books={this.state.books}
                            shelf={shelf}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default BookCase
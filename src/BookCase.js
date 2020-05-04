import React, { Component } from 'react'

import BookShelf from './BookShelf'

class BookCase extends Component {
    static defaultProps = {
        shelves: [
            { id: 'currentlyReading', name: 'Currently Reading' },
            { id: 'wantToRead', name: 'Want to Read' },
            { id: 'read', name: 'Read' },
        ]
    }

    changeBookShelf = (book, newShelf) => {
        this.props.changeBookShelf(book, newShelf)
    }
    render() {
        const { books } = this.props
        return (
            <div className="list-books-content">
                <div>
                    {this.props.shelves.map(shelf => (
                        <BookShelf
                            changeShelf={this.changeBookShelf}
                            key={shelf.id}
                            books={books}
                            shelf={shelf}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default BookCase
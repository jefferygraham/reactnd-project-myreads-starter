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
    render() {
        return (
            <div className="list-books-content">
                <div>
                    {this.props.shelves.map(shelf => (
                        <BookShelf
                            key={shelf.id}
                            books={this.props.books}
                            shelf={shelf}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default BookCase
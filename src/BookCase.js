import React, { Component } from 'react'

import BookShelf from './BookShelf'

class BookCase extends Component {
    static defaultProps = {
        shelves: {
            currentlyReading: 'Currently Reading',
            wantToRead: 'Want to Read',
            read: 'Read',
        }
    }
    render() {
        return (
            <div className="list-books-content">
                <div>
                    <BookShelf shelf={this.props.shelves.currentlyReading} />
                    <BookShelf shelf={this.props.shelves.wantToRead} />
                    <BookShelf shelf={this.props.shelves.read} />
                </div>
            </div>
        )
    }
}

export default BookCase
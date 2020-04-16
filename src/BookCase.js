import React, { Component } from 'react';
import Shelf from './Shelf';

class BookCase extends Component {
    static defaultProps = {
        shelf1: { id: 'currentlyReading', shelfTitle: 'Currently Reading' },
        shelf2: { id: 'wantToRead', shelfTitle: 'Want to Read' },
        shelf3: { id: 'read', shelfTitle: 'Read' }
    }

    changeShelf = (updatedBook, newShelf) => {
        this.props.changeShelf(updatedBook, newShelf)
    }

    render() {
        return (
            <div className="list-books-content">
                <div>
                    <Shelf shelf={this.props.shelf1} books={this.props.books} changeShelf={this.changeShelf} />
                    <Shelf shelf={this.props.shelf2} books={this.props.books} changeShelf={this.changeShelf} />
                    <Shelf shelf={this.props.shelf3} books={this.props.books} changeShelf={this.changeShelf} />
                </div>
            </div>
        )
    }
}


export default BookCase;
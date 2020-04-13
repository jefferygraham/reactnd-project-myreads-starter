import React, { Component } from 'react';
import Shelf from './Shelf';

class BookCase extends Component {
    static defaultProps = {
        shelf1: 'currentlyReading',
        shelf2: 'wantToRead',
        shelf3: 'read'
    }
    render() {
        return (
            <div className="list-books-content">
                <div>
                    <Shelf shelfProp={this.props.shelf1} books={this.props.books} />
                    <Shelf shelfProp={this.props.shelf2} books={this.props.books} />
                    <Shelf shelfProp={this.props.shelf3} books={this.props.books} />
                </div>
            </div>
        )
    }
}

export default BookCase;
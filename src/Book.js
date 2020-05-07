import React, { Component } from 'react'

class Book extends Component {
    state = {
        shelf: this.props.book.shelf
    }

    handleChange = (e) => {
        let newShelf = e.target.value;
        let bookId = this.props.book.id;
        this.props.changeBookShelf(newShelf, bookId)
    }

    render() {
        const { book } = this.props
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select
                                defaultValue={this.state.shelf || 'none'}
                                onChange={this.handleChange}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book
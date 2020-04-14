import React, { Component } from 'react';

class Book extends Component {
    state = {
        bookStatus: this.props.shelf
    }

    handleChange = (e) => {
        e.preventDefault();
        this.props.changeStatus(e.target.value, this.props.id);
    }

    render() {
        const { authors, title, thumbnail } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select defaultValue={this.state.bookStatus} onChange={this.handleChange}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors.join(', ')}</div>
                </div>
            </li>
        )
    }
}

export default Book;
import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
    state = {
        books: [],
        query: ""
    }

    updateQuery = (e) => {
        this.setState({
            [e.target.name]: e.target.value.trim()
        }, () => {
            const query = this.state.query
            BooksAPI.search(query)
                .then((books) => {
                    console.log(query)
                    this.setState(() => ({
                        books
                    }))
                })
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        this.props.closeSearch();
    }

    render() {
        const showingBooks = this.state.query === "" ?
            this.state.books
            : this.state.books.filter((book) => book.title.toLowerCase().includes(this.state.query.toLowerCase()))

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={this.handleClick}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            name="query"
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.updateQuery}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <li>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            {/* <select defaultValue={this.state.bookStatus} onChange={this.handleChange}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select> */}
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    {/* <div className="book-authors">{book.authors.join(', ')}</div> */}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {
    state = {
        query: ""
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
        this.props.searchBooks(query)
    }

    changeBookShelf = (newShelf, bookId) => {
        let book = this.props.books.filter((book) => book.id === bookId);
        this.props.changeShelf(book, newShelf);
    }

    addBookToShelf = (newShelf, bookId) => {
        let book = this.props.foundBooks.filter((book) => book.id === bookId);
        this.props.addBookToShelf(book, newShelf);
    }

    render() {
        const { query } = this.state;
        const { foundBooks } = this.props;

        const showingBooks = query === "" ?
            foundBooks :
            foundBooks.filter((foundBook) => (
                foundBook.title.toLowerCase().includes(query.toLowerCase())
            ))

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search">Close</button></Link>
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
                            id="query"
                            value={query}
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(e) => this.updateQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map(book => (
                            <Book changeBookShelf={this.addBookToShelf} key={book.id} book={book} />
                        ))}
                    </ol>
                </div>
            </div >
        )
    }
}

export default SearchPage
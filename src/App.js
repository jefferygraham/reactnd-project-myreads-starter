import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './BookCase'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    foundBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          books: books
        })
      })
  }

  toggleShowSearch = () => {
    this.setState({
      showSearchPage: !this.state.showSearchPage
    })
  }

  changeBookShelf = (updatedBook, newShelf) => {
    BooksAPI.update(updatedBook, newShelf)
      .then(data => {
        let books = [...this.state.books];
        let index = books.findIndex(book => book.id === updatedBook[0].id);
        books[index].shelf = newShelf;
        this.setState({ books });
      })
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
      .then(books => {
        this.setState({
          foundBooks: books
        })
      })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage
            toggleShowSearch={this.toggleShowSearch}
            searchBooks={this.searchBooks}
            foundBooks={this.state.foundBooks}
          />
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookCase
                changeBookShelf={this.changeBookShelf}
                books={this.state.books}
              />
              <div className="open-search">
                <button onClick={this.toggleShowSearch}>Add a book</button>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp

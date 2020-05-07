import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './BookCase'
import SearchPage from './SearchPage'
import { Route, Switch, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
    BooksAPI.search(query.trim())
      .then(books => {
        console.log(books)
        this.setState({
          foundBooks: books
        })
      })
  }

  render() {
    return (
      <div className="app">

        <Switch>
          <Route exact path="/search" render={() => (
            <SearchPage
              searchBooks={this.searchBooks}
              foundBooks={this.state.foundBooks}
            />
          )} />

          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <BookCase
                changeBookShelf={this.changeBookShelf}
                books={this.state.books}
              />

              <div className="open-search">
                <Link to="/search"><button>Add a book</button></Link>
              </div>
            </div>
          )} />
        </Switch>
      </div>

    )
  }
}

export default BooksApp

import React from 'react'
import axios from 'axios'

export default class FetchAndDisplayFromAnAPI extends React.PureComponent {
  apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30'
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }

    this.getBooks = this.getBooks.bind(this)
  }
  getBooks() {
    axios.get(this.apiURL).then(response => {
      this.setState({ books: response.data })
    })
  }

  render() {
    return (
      <div>
        <h1>Game of Thrones Books</h1>
        <p>Fetch a list from an API and display it</p>
        <button onClick={() => this.getBooks()}>Fetch Data</button>
        <div
          className="books"
          style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}
        >
          {this.state.books.map((book, index) => {
            return (
              <React.Fragment>
                <div key={index} className="book" style={{ margin: 30 }}>
                  <p style={{ textAlign: 'center' }}>Book {index + 1}</p>
                  <h2 style={{ textAlign: 'center' }}>{book.name}</h2>
                  <p>👱‍♂️: {book.authors.join(', ')}</p>
                  <p>📖: {book.numberOfPages}</p>
                  <p>🏡: {book.country}</p>
                  <p>⏰: {new Date(book.released).toDateString()}</p>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    )
  }
}

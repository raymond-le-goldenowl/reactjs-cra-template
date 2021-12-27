import React, { useEffect, useState } from 'react'

export default function Books() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    async function fetchBooks() {
      const url = `https://www.anapioficeandfire.com/api/books?pageSize=30`
      await fetch(url)
        .then(response => response.json())
        .then(books => setBooks(books))
    }
    fetchBooks()
  }, [])

  return (
    <div className="row">
      {Object.values(books).map((book, index) => {
        return (
          <div key={index} className="col-xl-4 col-lg-3 col-md-4 mt-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book?.name}</h5>
                <p className="card-text">{book?.authors.join(', ')}</p>
                <p className="card-text">
                  {new Date(book.released).toDateString()}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

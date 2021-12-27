import React, { useCallback, useEffect, useState } from 'react'

export default function Books() {
  const [books, setBooks] = useState([])
  const [keywords, setKeywords] = useState('')
  const [booksFilter, setBooksFilter] = useState([])

  const fetchBooks = useCallback(async () => {
    const url = `https://www.anapioficeandfire.com/api/books?pageSize=30`
    fetch(url)
      .then(response => response.json())
      .then(books => {
        setBooks(books)
        setBooksFilter(books)
      })
  }, [])

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  useEffect(() => {
    const result = books.filter(book =>
      book.name.toLowerCase().includes(keywords)
    )
    setBooksFilter(result)
  }, [books, keywords])

  return (
    <div className="row">
      <div className="mb-3 d-flex align-items-center">
        <label
          htmlFor="keywords"
          className="form-label"
          style={{ fontSize: '1.5rem' }}
        >
          Keywords:{' '}
        </label>
        <input
          onChange={({ target }) => setKeywords(target.value)}
          value={keywords}
          type="text"
          className="form-control"
          id="keywords"
        />
      </div>
      {Object.values(booksFilter).map((book, index) => {
        return (
          <div key={index} className="col-xl-4 col-lg-3 col-md-4 mt-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book?.name}</h5>
                <p className="card-text">{book?.authors?.join(', ')}</p>
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

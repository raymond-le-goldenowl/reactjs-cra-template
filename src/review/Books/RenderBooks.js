import React from 'react'

export default function RenderBooks({ booksFilter }) {
  return (
    <>
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
    </>
  )
}

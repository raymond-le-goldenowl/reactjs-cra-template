import React from 'react'
import NavLinks from '../NavLinks'

export default function Home() {
  const countOfCurrentBooks = 0
  return (
    <>
      <NavLinks />
      <div className="container-fluid">
        <h1>Hello, this is a home page!</h1>
        <h2 className="text-center mt-5">
          Count of current books: {countOfCurrentBooks || 0}
        </h2>
      </div>
    </>
  )
}

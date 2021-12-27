import React from 'react'
import Books from '../Books'
import NavLinks from '../NavLinks'

export default function Home() {
  return (
    <>
      <NavLinks />
      <div className="container-fluid">
        <h1>Hello, this is a home page!</h1>
        <Books />
      </div>
    </>
  )
}

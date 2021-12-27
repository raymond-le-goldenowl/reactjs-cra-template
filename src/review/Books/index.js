import React, { useCallback, useEffect, useState } from 'react'
import FormSearch from './FormSearch'
import RenderBooks from './RenderBooks'

export default function Books() {
  const [books, setBooks] = useState([])
  const [keywords, setKeywords] = useState('')
  const [booksFilter, setBooksFilter] = useState([])
  const [countOfBooksSearached, setCountOfBooksSearached] = useState(0)

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
    console.log(keywords)
    if (keywords.trim()?.length !== 0) {
      const result = books.filter(book =>
        book.name.toLowerCase().includes(keywords)
      )
      setBooksFilter(result)
      setCountOfBooksSearached(result.length)
    } else {
      setCountOfBooksSearached(0)
    }
  }, [books, keywords])

  return (
    <div className="row">
      <p>Number of books searched: {countOfBooksSearached}</p>
      <FormSearch keywords={keywords} setKeywords={setKeywords} />
      <RenderBooks booksFilter={booksFilter} />
    </div>
  )
}

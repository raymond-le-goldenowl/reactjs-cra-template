import React from 'react'

export default function FormSearch({ keywords, setKeywords }) {
  return (
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
  )
}

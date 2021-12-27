import React, { useCallback, useEffect, useState } from 'react'

export default function UseCallback() {
  const [users, setUsers] = useState(() => [])

  // Mỗi lần setUsers được thực thi, biến getData được tạo lại.
  // và sẽ tạo một vùng nhớ khác vớ getData ban đầu.
  // const getData = type => {
  //   return fetch(`https://reqres.in/api/${type}`)
  // }

  // * Chỉ thực hiện tạo một lần hàm lấy dữ liệu.
  const getData = useCallback(type => {
    return fetch(`https://reqres.in/api/${type}`)
  }, [])

  const handleClick = () => {
    getData('users')
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(err => console.log(err.message))
  }

  return (
    <div>
      <button onClick={handleClick}>Get users data</button>
      <p>{JSON.stringify(users)}</p>
      <Comments getData={getData} />
    </div>
  )
}
const Comments = ({ getData }) => {
  const [comments, setComments] = useState(() => [])

  // Thêm DependencyList để muốn xác nhận khi một component được load lại thì.
  // hàm getData sẽ được tạo lại một cái mới, vậy nên useEffect hiểu điểu thay đổi,
  // và thực hiện fetch dữ liệ comments lại một lần nữa.
  useEffect(() => {
    console.log('Get comments data')
    getData('comments')
      .then(res => res.json())
      .then(comments => setComments(comments))
      .catch(err => console.log(err.message))
  }, [getData])

  return (
    <div>
      <div>Comments data</div>
      <p>{JSON.stringify(comments)}</p>
    </div>
  )
}

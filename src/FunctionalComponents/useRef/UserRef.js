import React, { useEffect, useRef } from 'react'

export default function UserRef() {
  const ref = useRef(null)

  useEffect(() => {
    console.log({ ref })
  })
  /**
   * useRef:
   * Có giá trị khởi tạo.
   * Mặc định là một object có phần tử bên trong là current.
   * Giá trị trả về là một object trước đó khi re-render component chứ không bị khởi tại lại.
   * Giống với useState, nhưng useState sẽ gây re-render component khi thay đổi giá trị - còn useRef thì không.
   * stale closure.
   *      vd: setInterval trong useEffect(). thay đổi useState(count + 1) và console.
   * log(count) nhưng vẫn hiện ra 0. còn useRef thì giải quyết được.
   *
   * Sử dụng như việc truy vấn phần tử DOM.
   */

  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
}

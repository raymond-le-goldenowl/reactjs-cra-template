import React, { useMemo, useState } from 'react'

export default function CounterUseMemo() {
  const [count, setCount] = useState(() => 0)

  const sum = (a, b) => a + b

  // chỉ chạy một lần, dù cho setState có chạy, khi giá trị trả về không đổi.
  const datausa = useMemo(() => {
    console.log('start')
    setTimeout(() => {}, 10000)
    console.log('end')
    return sum(0, 2)
  }, [])

  // luôn luôn chạy sau khi setState chạy.
  console.log(sum(1, count))

  return (
    <div style={{ textAlign: 'center', marginTop: 30 }}>
      <button
        style={{ fontSize: '4rem', padding: '3rem' }}
        onClick={() => setCount(prev => prev + 1)}
      >
        +
      </button>
      <span style={{ fontSize: '4rem', padding: '3rem' }}>{count}</span>
      <button
        style={{ fontSize: '4rem', padding: '3rem' }}
        onClick={() => setCount(prev => prev - 1)}
      >
        -
      </button>
      <div>{datausa}</div>
    </div>
  )
}

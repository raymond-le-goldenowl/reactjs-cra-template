import React from 'react'
import users from './users-data'

export default function RenderListUsers() {
  console.log(users)

  return (
    <div>
      <ul>
        {users.map(user => (
          <li>
            {user.name} | {user.location} | {user.car}
          </li>
        ))}
      </ul>
    </div>
  )
}

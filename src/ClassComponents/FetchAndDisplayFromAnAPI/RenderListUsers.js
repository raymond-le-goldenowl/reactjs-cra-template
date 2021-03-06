import React from 'react'
import users from './users-data'
export default class RenderListUsers extends React.PureComponent {
  render() {
    return (
      <div>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} | {user.location} | {user.car}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

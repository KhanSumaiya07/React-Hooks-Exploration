import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const[user, setUser] = useState(null)
  return (
    <UserContext>

    </UserContext>
  )
}

export default UserContextProvider
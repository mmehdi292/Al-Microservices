import React from 'react'

const UserContext = React.createContext({user: null})

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export {UserProvider, UserConsumer}
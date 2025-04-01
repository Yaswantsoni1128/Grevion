import React , {useContext , createContext} from "react"

export const LoginContext = createContext({
    token : 1234 // random token here 
})

export const useLoginContext = () => {
  return useContext(LoginContext)
}

export const LoginContextProvider = LoginContext.Provider
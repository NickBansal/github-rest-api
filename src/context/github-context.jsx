/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react'

export const GithubContext = createContext({
    repos: [],
    loading: false,
    error: false,
})

export const GithubProvider = ({ children }) => {
    const values = {
        repos: [],
        loading: false,
        error: false,
    }

    return (
        <GithubContext.Provider value={values}>
            {children}
        </GithubContext.Provider>
    )
}

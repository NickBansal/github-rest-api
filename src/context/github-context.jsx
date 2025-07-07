/* eslint-disable react-refresh/only-export-components */
import axios from 'axios'
import { createContext, useState } from 'react'

export const GithubContext = createContext({
    repos: [],
    getRepos: () => {},
    loading: false,
    error: false,
})

export const GithubProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [repos, setRepos] = useState([])

    const getRepos = async (query) => {
        setLoading(true)
        setError(false)

        axios
            .get(`https://api.github.com/search/repositories?q=${query}`)
            .then((response) => {
                setRepos(response.data.items)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const values = {
        repos,
        getRepos,
        loading,
        error,
    }

    return (
        <GithubContext.Provider value={values}>
            {children}
        </GithubContext.Provider>
    )
}

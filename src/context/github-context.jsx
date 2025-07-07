/* eslint-disable react-refresh/only-export-components */
import axios from 'axios'
import { createContext, useState } from 'react'

export const GithubContext = createContext({
    repos: [],
    getRepos: () => {},
    loading: false,
    error: false,
    emptyResults: false,
})

export const GithubProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [repos, setRepos] = useState([])
    const [emptyResults, setEmptyResults] = useState(false)

    const getRepos = async (query) => {
        setLoading(true)
        setError(false)

        axios
            .get(`https://api.github.com/search/repositories?q=${query}`)
            .then((response) => {
                setRepos(response.data.items)
                setEmptyResults(response.data.items.length === 0)
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
        emptyResults,
    }

    return (
        <GithubContext.Provider value={values}>
            {children}
        </GithubContext.Provider>
    )
}

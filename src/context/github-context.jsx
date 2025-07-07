/* eslint-disable react-refresh/only-export-components */
import axios from 'axios'
import { createContext, useState } from 'react'

export const GithubContext = createContext({
    repos: [],
    getRepos: () => {},
    sortRepos: () => {},
    loading: false,
    error: false,
    emptyResults: false,
})

export const GithubProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [repos, setRepos] = useState([])
    const [emptyResults, setEmptyResults] = useState(false)

    const getData = (query) => {
        setLoading(true)
        setError(false)
        axios
            .get(query)
            .then((response) => {
                setRepos(response.data.items)
                setEmptyResults(response.data.items.length === 0)
            })
            .catch(() => {
                setError(true)
                setEmptyResults(false)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const getRepos = (query) => {
        const formattedQuery = `https://api.github.com/search/repositories?q=${query}`
        getData(formattedQuery)
    }

    const sortRepos = ({ sort, order }) => {
        console.log('Sorting repos:', sort, order)
    }

    const values = {
        repos,
        getRepos,
        sortRepos,
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

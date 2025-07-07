import axios from 'axios'
import { useEffect, useState } from 'react'

export const useGetMarkdown = (repo) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get(
                `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/${repo.default_branch}/README.md`,
                {
                    headers: {
                        Accept: 'application/vnd.github.html',
                    },
                }
            )
            .then((response) => {
                setData(response.data)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [repo])

    return { loading, data, error }
}

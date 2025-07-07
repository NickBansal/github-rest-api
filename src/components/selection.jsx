import { useContext } from 'react'
import { GithubContext } from '../context/github-context'

export const Selection = () => {
    const { sortRepos } = useContext(GithubContext)

    const sortOptions = [
        { label: 'Recently Updated', sort: 'updated' },
        { label: 'Least Recently Updated', sort: 'updated', order: 'asc' },
        { label: 'Most Stars', sort: 'stars' },
        { label: 'Fewest Stars', sort: 'stars', order: 'asc' },
        { label: 'Most Forks', sort: 'forks' },
        { label: 'Fewest Forks', sort: 'forks', order: 'asc' },
    ]

    const handleChange = (e) => {
        const selectedIndex = e.target.value
        const selectedOption = sortOptions[selectedIndex]
        sortRepos(selectedOption)
    }

    return (
        <form className="max-w-sm mx-auto mb-6">
            <select
                defaultValue=""
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed"
            >
                <option disabled>Sort by:</option>
                {sortOptions.map((option, index) => {
                    return (
                        <option value={index} key={option.label}>
                            {option.label}
                        </option>
                    )
                })}
            </select>
        </form>
    )
}

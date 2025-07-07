import { useContext } from 'react'
import { GithubContext } from '../context/github-context'
import { FaArrowTurnUp } from 'react-icons/fa6'

export const AllRepos = () => {
    const { repos, loading, error, emptyResults } = useContext(GithubContext)

    if (!loading && repos.length === 0 && !error && !emptyResults) {
        return (
            <p className="text-center mt-8 text-lg md:text-xl">
                Start your journey by searching for github repos above
                <FaArrowTurnUp className="inline-block ml-2 text-3xl" />
            </p>
        )
    }
}

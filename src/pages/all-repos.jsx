import { useContext } from 'react'
import { GithubContext } from '../context/github-context'
import { FaArrowTurnUp } from 'react-icons/fa6'
import { ErrorMessage } from '../components/error-message'

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

    if (error) {
        return <ErrorMessage />
    }

    return (
        <div className="max-w-full md:max-w-2xl lg:max-w-6xl mx-auto p-4">
            {loading ? (
                <div className="text-center mt-8">
                    <p className="text-center w-full">
                        Loading content, please wait....
                    </p>{' '}
                </div>
            ) : (
                <>
                    {emptyResults ? (
                        <p className="text-center w-full">
                            We couldn't find any results for your search. Please
                            try again with a different query.
                        </p>
                    ) : null}
                </>
            )}
        </div>
    )
}

import { FaGithubSquare } from 'react-icons/fa'
import cn from 'classnames'
import { useState } from 'react'
import { CgChevronDown } from 'react-icons/cg'
import { ExtraRepoInformation } from './extra-repo-information'

export const SingleRepo = ({ repo }) => {
    const [seeMore, setSeeMore] = useState(false)

    return (
        <div className="border p-4 rounded-lg flex flex-col">
            <h3 className="text-lg font-semibold truncate max-w-full">
                {repo.name}
            </h3>
            <p className="italic truncate max-w-full overflow-hidden whitespace-nowrap">
                Author - {repo.owner.login}
            </p>
            <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 flex items-center hover:text-blue-800"
            >
                <FaGithubSquare className="mr-2" color="black" />
                Repository link
            </a>
            <button
                aria-expanded={seeMore}
                className={cn(
                    'text-teal-600 hover:underline text-left cursor-pointer mt-4 flex items-end',
                    {
                        'mb-4': seeMore,
                    }
                )}
                onClick={() => setSeeMore((prevState) => !prevState)}
            >
                See {seeMore ? 'less' : 'more'}
                <CgChevronDown
                    size={20}
                    className={cn(
                        `inline-block transition duration-200 ease-in-out`,
                        {
                            'rotate-180': seeMore,
                        }
                    )}
                />
            </button>
            {seeMore && <ExtraRepoInformation repo={repo} />}
        </div>
    )
}

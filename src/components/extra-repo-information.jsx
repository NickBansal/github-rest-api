import { FaCodeBranch, FaExclamationCircle } from 'react-icons/fa'
import { FaHeart, FaStar } from 'react-icons/fa6'

export const ExtraRepoInformation = ({ repo }) => {
    return (
        <div className="flex flex-col border-t border-gray-300 pt-4">
            <p className="flex items-center gap-2">
                <FaCodeBranch color="orange" />
                Forks: {repo.forks}
            </p>
            <p className="flex items-center gap-2">
                <FaHeart color="teal" />
                Likes: {repo.watchers}
            </p>
            <p className="flex items-center gap-2">
                <FaStar color="gold" />
                Stars: {repo.stargazers_count}
            </p>
            <p className="flex items-center gap-2">
                <FaExclamationCircle color="red" />
                Issues: {repo.open_issues_count}
            </p>
        </div>
    )
}

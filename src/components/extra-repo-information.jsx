import { useState } from 'react'
import { FaCodeBranch, FaExclamationCircle } from 'react-icons/fa'
import { FaArrowRight, FaHeart, FaStar } from 'react-icons/fa6'

export const ExtraRepoInformation = ({ repo }) => {
    const [infoModal, setInfoModal] = useState(false)

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
            <button
                className="text-teal-600 hover:underline text-left cursor-pointer mt-4 flex items-center gap-2"
                onClick={() => setInfoModal((prevState) => !prevState)}
            >
                More information available
                <FaArrowRight size={20} />
            </button>
            {infoModal ? (
                // <MoreInformationModal
                //     repo={repo}
                //     onClose={() => setInfoModal(false)}
                // />
                <p>HELLO</p>
            ) : null}
        </div>
    )
}

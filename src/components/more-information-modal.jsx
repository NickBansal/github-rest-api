import { useGetMarkdown } from '../hooks/useGetMarkdown'
import { ErrorMessage } from './error-message'
import { LoadingSpinner } from './loading-spinner'

export const MoreInformationModal = ({ repo, onClose }) => {
    const { loading, data, error } = useGetMarkdown(repo)

    return (
        <div
            id="default-modal"
            className="overflow-y-scroll overflow-x-hidden fixed top-0 right-1/2 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-gray-500/50"
        >
            <div className="flex items-center justify-center h-screen">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl text-gray-900 dark:text-white">
                                <strong>{repo.name}</strong> -{' '}
                                <i>{repo.owner.login}</i>
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                onClick={onClose}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {loading ? (
                            <div className="flex items-center justify-center p-4 md:p-5">
                                <LoadingSpinner />
                            </div>
                        ) : null}

                        {error ? <ErrorMessage /> : null}

                        {data ? (
                            <div className="p-4 md:p-5 space-y-4">
                                <div
                                    dangerouslySetInnerHTML={{ __html: data }}
                                />
                            </div>
                        ) : null}

                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                onClick={onClose}
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

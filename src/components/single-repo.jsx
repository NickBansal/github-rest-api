export const SingleRepo = ({ repo }) => {
    return (
        <div className="border p-4 rounded-lg flex flex-col">
            <h3 className="text-lg font-semibold truncate max-w-full">
                {repo.name}
            </h3>
        </div>
    )
}

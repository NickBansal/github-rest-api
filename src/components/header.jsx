import { GrGithub } from 'react-icons/gr'

export const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 text-center flex items-center justify-center gap-4">
            <GrGithub size={40} />
            <h1 className="text-2xl font-bold">Github rest API</h1>
        </header>
    )
}

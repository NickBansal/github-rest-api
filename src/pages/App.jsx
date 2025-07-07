import { Header } from '../components/header'
import { SearchBar } from '../components/search-bar'
import { GithubProvider } from '../context/github-context'

const App = () => {
    return (
        <GithubProvider>
            <div>
                <Header />
                <SearchBar />
            </div>
        </GithubProvider>
    )
}

export default App

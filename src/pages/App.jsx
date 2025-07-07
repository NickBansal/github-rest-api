import { Header } from '../components/header'
import { SearchBar } from '../components/search-bar'
import { GithubProvider } from '../context/github-context'
import { AllRepos } from './all-repos'

const App = () => {
    return (
        <GithubProvider>
            <div>
                <Header />
                <SearchBar />
                <AllRepos />
            </div>
        </GithubProvider>
    )
}

export default App

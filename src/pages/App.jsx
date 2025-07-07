import { Header } from '../components/header'
import { GithubProvider } from '../context/github-context'

const App = () => {
    return (
        <GithubProvider>
            <div>
                <Header />
            </div>
        </GithubProvider>
    )
}

export default App

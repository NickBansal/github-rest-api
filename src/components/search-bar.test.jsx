import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { SearchBar } from './search-bar'
import { GithubContext } from '../context/github-context'

describe('<SearchBar />', () => {
    const mockOnSearch = vi.fn()

    beforeEach(() => {
        cleanup()
    })

    it('should render the search input', () => {
        render(
            <GithubContext.Provider
                value={{ getRepos: mockOnSearch, loading: false }}
            >
                <SearchBar />
            </GithubContext.Provider>
        )
        expect(
            screen.getByPlaceholderText(/Search github repositories.../)
        ).toBeInTheDocument()
    })

    it('should call the getRepos function when user inputs a search and clicks search', () => {
        render(
            <GithubContext.Provider
                value={{ getRepos: mockOnSearch, loading: false }}
            >
                <SearchBar />
            </GithubContext.Provider>
        )

        const input = screen.getByPlaceholderText(
            /Search github repositories.../
        )

        fireEvent.change(input, {
            target: { value: 'test' },
        })

        fireEvent.click(screen.getByRole('button', { name: /Search/ }))

        expect(mockOnSearch).toHaveBeenCalledWith('test')
    })

    it('should disable the input and button when loading and show a spinning loader', () => {
        render(
            <GithubContext.Provider
                value={{ getRepos: mockOnSearch, loading: true }}
            >
                <SearchBar />
            </GithubContext.Provider>
        )

        const input = screen.getByPlaceholderText(
            /Search github repositories.../
        )
        const button = screen.getByRole('button', { name: /Search/ })

        expect(input).toBeDisabled()
        expect(button).toBeDisabled()
        expect(screen.getByRole('status')).toBeInTheDocument()
    })
})

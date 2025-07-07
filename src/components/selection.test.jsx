import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Selection } from './selection'
import { GithubContext } from '../context/github-context'

describe('<Selection />', () => {
    const mockOnSearch = vi.fn()

    beforeEach(() => {
        cleanup()
    })

    it('should render the selection drop down', () => {
        render(
            <GithubContext.Provider
                value={{ sortRepos: mockOnSearch, loading: false }}
            >
                <Selection />
            </GithubContext.Provider>
        )
        expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should disable to drop down when loading data', () => {
        render(
            <GithubContext.Provider
                value={{ sortRepos: mockOnSearch, loading: true }}
            >
                <Selection />
            </GithubContext.Provider>
        )

        const select = screen.getByRole('combobox')
        expect(select).toBeDisabled()
    })

    it('should call sortRepos with the correct value when an option is selected', () => {
        render(
            <GithubContext.Provider
                value={{ sortRepos: mockOnSearch, loading: false }}
            >
                <Selection />
            </GithubContext.Provider>
        )

        const select = screen.getByRole('combobox')
        fireEvent.change(select, { target: { value: '1' } })
        expect(mockOnSearch).toHaveBeenCalledWith({
            label: 'Least Recently Updated',
            sort: 'updated',
            order: 'asc',
        })

        fireEvent.change(select, { target: { value: '2' } })
        expect(mockOnSearch).toHaveBeenLastCalledWith({
            label: 'Most Stars',
            sort: 'stars',
        })

        fireEvent.change(select, { target: { value: '3' } })
        expect(mockOnSearch).toHaveBeenLastCalledWith({
            label: 'Fewest Stars',
            sort: 'stars',
            order: 'asc',
        })

        fireEvent.change(select, { target: { value: '4' } })
        expect(mockOnSearch).toHaveBeenLastCalledWith({
            label: 'Most Forks',
            sort: 'forks',
        })

        fireEvent.change(select, { target: { value: '5' } })
        expect(mockOnSearch).toHaveBeenLastCalledWith({
            label: 'Fewest Forks',
            sort: 'forks',
            order: 'asc',
        })
    })
})

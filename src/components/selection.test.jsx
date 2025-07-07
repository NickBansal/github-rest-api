import { render, screen, cleanup } from '@testing-library/react'
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
            <GithubContext.Provider value={{ sortRepos: mockOnSearch }}>
                <Selection />
            </GithubContext.Provider>
        )
        expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
})

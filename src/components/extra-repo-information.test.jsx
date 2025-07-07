import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ExtraRepoInformation } from './extra-repo-information'

vi.mock('./more-information-modal', () => ({
    MoreInformationModal: vi.fn(() => <div>Mocked Modal</div>),
}))

describe('<ExtraRepoInformation />', () => {
    const mockRepo = {
        forks: 10,
        watchers: 5,
        stargazers_count: 20,
        open_issues_count: 2,
        name: 'test-repo',
        owner: { login: 'test-owner' },
    }

    beforeEach(() => {
        cleanup()
    })

    it('renders the extra information correctly', () => {
        render(<ExtraRepoInformation repo={mockRepo} />)

        expect(screen.getByText(/Forks: 10/)).toBeInTheDocument()
        expect(screen.getByText(/Likes: 5/)).toBeInTheDocument()
        expect(screen.getByText(/Stars: 20/)).toBeInTheDocument()
        expect(screen.getByText(/Issues: 2/)).toBeInTheDocument()
    })

    it('toggles the modal on button click', () => {
        render(<ExtraRepoInformation repo={mockRepo} />)

        expect(screen.queryByText(/Mocked Modal/)).not.toBeInTheDocument()

        const button = screen.getByText(/More information available/)
        fireEvent.click(button)

        expect(screen.getByText(/Mocked Modal/)).toBeInTheDocument()
    })
})

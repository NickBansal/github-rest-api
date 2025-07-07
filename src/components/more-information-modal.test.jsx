import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MoreInformationModal } from './more-information-modal'
import { useGetMarkdown } from '../hooks/useGetMarkdown'

vi.mock('../hooks/useGetMarkdown')

describe('<MoreInformationModal />', () => {
    const mockRepo = {
        name: 'test-repo',
        owner: { login: 'test-owner' },
    }

    const mockOnClose = vi.fn()

    beforeEach(() => {
        cleanup()
    })

    it('should render loading spinner on initial load', () => {
        vi.mocked(useGetMarkdown).mockReturnValue({
            loading: true,
            data: null,
            error: false,
        })

        render(<MoreInformationModal repo={mockRepo} onClose={mockOnClose} />)

        expect(screen.getByText(/Loading/)).toBeInTheDocument()
    })

    it('should render error message when there is an error', () => {
        vi.mocked(useGetMarkdown).mockReturnValue({
            loading: false,
            data: null,
            error: true,
        })

        render(<MoreInformationModal repo={mockRepo} onClose={mockOnClose} />)

        expect(
            screen.getByText(/Error fetching data. Please try again./)
        ).toBeInTheDocument()
    })

    it('should render the modal with repo information', () => {
        vi.mocked(useGetMarkdown).mockReturnValue({
            loading: false,
            data: '## Sample Markdown Content',
            error: false,
        })
        render(<MoreInformationModal repo={mockRepo} onClose={mockOnClose} />)

        expect(screen.getByText('test-repo')).toBeInTheDocument()
        expect(screen.getByText('test-owner')).toBeInTheDocument()
        expect(screen.getByText(/Sample Markdown Content/)).toBeInTheDocument()
    })

    it('should call onClose when close button is clicked', () => {
        vi.mocked(useGetMarkdown).mockReturnValue({
            loading: false,
            data: '## Sample Markdown Content',
            error: false,
        })

        render(<MoreInformationModal repo={mockRepo} onClose={mockOnClose} />)

        expect(mockOnClose).not.toHaveBeenCalled()

        const closeButton = screen.getByRole('button', { name: /close modal/i })
        closeButton.click()

        expect(mockOnClose).toHaveBeenCalledTimes(1)
    })
})

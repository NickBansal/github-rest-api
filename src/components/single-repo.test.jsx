import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SingleRepo } from './single-repo'

vi.mock('./extra-repo-information', () => ({
    ExtraRepoInformation: vi.fn(() => <div>Extra information</div>),
}))

describe('<Selection />', () => {
    const mockRepo = {
        id: 1,
        name: 'test-repo',
        owner: { login: 'test-owner' },
        html_url: '',
    }

    beforeEach(() => {
        cleanup()
    })

    it('should render the repo name and owner', () => {
        render(<SingleRepo repo={mockRepo} />)

        expect(screen.getByText('test-repo')).toBeInTheDocument()
        expect(screen.getByText('Author - test-owner')).toBeInTheDocument()
    })

    it('should toggle the see more section on button click', () => {
        render(<SingleRepo repo={mockRepo} />)

        const button = screen.getByText('See more')
        expect(screen.queryByText('Extra information')).not.toBeInTheDocument()

        fireEvent.click(button)

        expect(screen.getByText(/Extra information/)).toBeInTheDocument()
        expect(button).toHaveTextContent('See less')

        fireEvent.click(button)

        expect(screen.queryByText('Extra information')).not.toBeInTheDocument()
        expect(button).toHaveTextContent('See more')
    })
})

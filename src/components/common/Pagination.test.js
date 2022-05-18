import { render, screen } from '@testing-library/react'
import Pagination from './Pagination'
import renderer from 'react-test-renderer'

describe('pagination tests', () => {
  it('renders the right number of page links', () => {
    render(<Pagination pagesCount={10} />);
    const links = screen.getAllByTestId('pagination-link');
    expect(links).toHaveLength(10);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Pagination pagesCount={3} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})


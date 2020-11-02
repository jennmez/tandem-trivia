import Welcome from '../Welcome';

import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  getByTestId,
} from '@testing-library/react';

afterEach(cleanup);

describe('Welcome', () => {
  it('renders Welcome component', () => {
    render(<Welcome />);
  });

  it('renders a heading', () => {
    render(<Welcome />);

    screen.getByRole('heading', { name: /impress me, human/i });

    expect(screen.getByText(/impress me, human/i)).toBeInTheDocument();
  });

  it('renders a play button', () => {
    render(<Welcome />);

    screen.getByRole('button', { name: /play/i });

    expect(screen.getByText(/play/i)).toBeInTheDocument();
  });

  // this test does not work.
  xit('fires the playGame method on click', () => {
    const button = getByTestId(/play game/i);
    fireEvent.click(button);

    expect(button.getByTestId(/play game/i)).not.toBeInTheDocument();
  });
});

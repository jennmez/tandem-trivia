import Score from '../Score';

import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Score', () => {
  test('renders Score component', () => {
    render(<Score />);
  });

  test(`renders the player's score`, () => {
    render(<Score score={8} />);

    screen.getByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent(
      'You got 8 questions correct.'
    );
  });
});

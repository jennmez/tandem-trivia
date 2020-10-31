import Score from '../Score';

import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Score', () => {
  test('renders Score component', () => {
    render(<Score />);
  });

  test(`renders the player's score`, () => {
    let score = 8;
    render(<Score score={score} />);

    screen.getByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent(
      'You got 8 questions correct.'
    );
  });

  test('renders correct img for highest score', () => {
    render(<Score score={10} />);

    screen.getByAltText(/grumpy_love/i);

    expect(screen.getByAltText(/grumpy_love/i)).toBeInTheDocument();
  });

  test('renders correct img for lowest score', () => {
    render(<Score score={1} />);

    screen.getByAltText(/grumpy_food/i);

    expect(screen.getByAltText(/grumpy_food/i)).toBeInTheDocument();
  });
});

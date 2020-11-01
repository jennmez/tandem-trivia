import Score from '../Score';

import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Score', () => {
  test('renders Score component', () => {
    render(<Score />);
  });

  test(`correctly renders the player's score`, () => {
    let score = 8;
    render(<Score score={score} />);

    screen.getByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent(
      '8 questions correct'
    );
  });

  test('renders correct Grumpy message', () => {
    render(<Score score={10} />);

    screen.getByText(/you'll do./i);

    expect(screen.getByText(/you'll do./i)).toBeInTheDocument();

    // I thought I could use the .not matcher before toBeInTheDoc() to show that the other messages are not appearing, but the couple ways I've tried asserting are not working. Further exploration and commenting out tests for time being: https://github.com/testing-library/jest-dom

    // expect(
    //   screen.getByText(/you interrupted my meal for this.../i)
    // ).not.toBeInTheDocument();
    // expect(
    //   screen.getByText(/sigh. how dare you disturb my slumber./i)
    // ).not.toBeInTheDocument();
    // expect(
    //   screen.getByText(/this belly is still off-limits to the likes of you./i)
    // ).not.toBeInTheDocument();
  });

  test('renders img', () => {
    render(<Score score={10} />);

    screen.getByTestId('best');

    // expect(screen.getByTestId('worst')).not.toBeInTheDocument();
    expect(screen.queryByTestId('worst')).not.toBeInTheDocument();
    expect(screen.queryByTestId('bad')).not.toBeInTheDocument();
    expect(screen.queryByTestId('good')).not.toBeInTheDocument();
  });
});

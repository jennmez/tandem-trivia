import App from '../App';

import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

jest.mock('axios');

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });

  it('fetches data from the server', async () => {
    const data = {
      data: {
        hits: [
          {
            question: 'What was Tandem previous name?',
            incorrect: ['Tandem', 'Burger Shack', 'Extraordinary Humans'],
            correct: 'Devmynd',
          },
          {
            question: 'What is the name for a cow-bison hybrid?',
            incorrect: ['Cowson', 'Bicow', 'Mooson'],
            correct: 'Beefalo',
          },
        ],
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));

    // await userEvent.click(screen.getByRole('button'));

    // await expect(fetchData('react')).resolves.toEqual(data);
  });
});

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

  it('renders Welcome component on page load', () => {
    render(<App />);

    screen.getByText(
      /grumpy cat is a tough critic. you're gonna have work really hard to earn her respect. your challenge is to get 10 tricky trivia questions right... and maybe she'll let you rub her belly. but don't count on it./i
    );
  });

  //attempting mocking but I need more practice!
  // xit('fetches data from the server', async () => {
  //   const data = {
  //     data: {
  //       hits: [
  //         {
  //           question: 'What was Tandem previous name?',
  //           incorrect: ['Tandem', 'Burger Shack', 'Extraordinary Humans'],
  //           correct: 'Devmynd',
  //         },
  //         {
  //           question: 'What is the name for a cow-bison hybrid?',
  //           incorrect: ['Cowson', 'Bicow', 'Mooson'],
  //           correct: 'Beefalo',
  //         },
  //       ],
  //     },
  //   };

  //   axios.get.mockImplementationOnce(() => Promise.resolve({ data }));

  //   // await userEvent.click(screen.getByRole('button'));

  //   // await expect(fetchData('/get')).resolves.toEqual(data);
  // });
});

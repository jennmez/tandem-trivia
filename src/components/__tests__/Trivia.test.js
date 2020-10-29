import Trivia from '../Trivia';

import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Trivia', () => {
  it('renders without crashing', () => {
    render(<Trivia />);
  });
});

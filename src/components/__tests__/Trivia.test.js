import Trivia from '../Trivia';

import React from 'react';
import { render } from '@testing-library/react';

xdescribe('Trivia', () => {
  it('renders without crashing', () => {
    render(<Trivia />);
  });
});

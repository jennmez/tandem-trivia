import React from 'react';

import grumpy_love from '../SVG/gc_love.svg';

export default function Score({ score }) {
  return (
    <div>
      <h3>You got {score} questions correct.</h3>
      <img src={grumpy_love} alt="grumpy_love" title="grumpy_love" />
    </div>
  );
}

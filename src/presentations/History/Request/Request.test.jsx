import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Request from './Request';

describe('Old request component', () => {
  afterEach(() => cleanup());

  it('should render an old request', () => {
    const { asFragment } = render(<Request 
      method="GET"
      url="google.com" 
      onClick={() => {}}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});

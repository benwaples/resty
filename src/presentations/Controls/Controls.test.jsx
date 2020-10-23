import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Controls from './Controls';

describe('Controls component', () => {
  afterEach(() => cleanup());

  it('should render controls', () => {
    const { asFragment } = render(<Controls 
      url="blank"
      method="GET"
      body="blank"
      onChange={() => {}}
      onSubmit={() => {}}
    />);

    expect(asFragment()).toMatchSnapshot(); 
  });

});


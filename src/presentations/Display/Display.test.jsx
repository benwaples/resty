import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Display from './Display';

describe('Display components', () => {
  afterEach(() => cleanup());

  it('should render json', () => {
    const { asFragment } = render(<Display 
      response={ 
        { 
          hello: [1, 2, 3, 4], there: { a:1, b:2, c:['hello', null] } 
        }} />);

    setTimeout(() => {
      expect(asFragment).toMatchSnapshot();
    }, 2000);
    
  });
});

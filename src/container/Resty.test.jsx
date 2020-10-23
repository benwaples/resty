import React from 'react';
import { 
  cleanup, 
  fireEvent, 
  render, 
  screen, 
  waitFor 
} from '@testing-library/react';
import { fetchUrl } from '../services/fetch-url';
import Resty from './Resty';

jest.mock('../services/fetch-url');

describe('Resty container', () => {
  it('should render the json returned when hitting an API', () => {
    fetchUrl.mockResolvedValue(
      { 
        hello: [1, 2, 3, 4], there: { a:1, b:2, c:['hello', null] } 
      });

    render(<Resty />);

    fireEvent.click(screen.getByText('Submit'));

    setTimeout(() => {
      const display = screen.getByTestId('display');

      return expect(display).not.toBeEmptyDOMElement();
    }, 3000);
  });
});

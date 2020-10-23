import React from 'react';
import { cleanup, render } from '@testing-library/react';
import History from './History';

describe('Old request component', () => {
  afterEach(() => cleanup());

  it('should render an old request', () => {
    const history = [
      {
        url: 'google.com',
        method: 'GET'
      },
      {
        url: 'yahoo.com',
        method: 'GET'
      },
      {
        url: 'wiseguy.com',
        method: 'GET'
      },
    ];
    // eslint-disable-next-line max-len
    const { asFragment } = render(<History history={history} onClick={() => {}} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

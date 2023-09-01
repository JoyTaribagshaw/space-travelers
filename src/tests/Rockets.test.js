import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Rockets from '../Components/rockets';

test('Check if the rocket component is being rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Rockets />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});

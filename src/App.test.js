/* global it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers';

it('renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
      todos={[]}
      deleteTodo={mockFunction}
    />,
  );
  expect(component.exists()).toEqual(true);
});

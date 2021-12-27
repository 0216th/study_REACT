import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Component/Input';

describe('<Input>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input name="zzz" />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(React.isValidElement(<Input name="zzz" />)).toBeTruthy();
  });
});
jest.useFakeTimers();
jest.runAllTimers();

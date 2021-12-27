// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import * as Aphrodite from 'Aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';

Aphrodite.StyleSheetTestUtils.suppressStyleInjection(); //아프로디테의 DOM함수 호출과정을 중지
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection(); //아프로디테의 DOM함수 호출과정을 중지

configure({ adapter: new Adapter() });

//경고메세지를 오류로 인식하도록 설정
afterEach(() => {
  console.error.mockClear();
});

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation((e) => {
    throw new Error(e);
  });
});

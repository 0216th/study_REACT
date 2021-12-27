import React from 'react';
import { shallow } from 'enzyme';
import CheckBox from '../Component/CheckBox';

//render() 함수의 오류 발생 여부 검증
describe('<CheckBox>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<CheckBox name="required">테스트</CheckBox>);
    }).not.toThrow();
  });

  it('displays errorMsg', () => {
    const errorMsg = '오류 메세지';
    const errorHtml = shallow(
      <CheckBox name="name" errorMsg={errorMsg}>
        테스트
      </CheckBox>,
    );
    const printError = errorHtml.dive().find('span').html(); //출력된 html을 문자열로 변환
    expect(printError).toContain(errorMsg); //오류 메세지가 포함되었는지 검증
  });

  it('calls back onChange on clicked', () => {
    const changeStub = jest.fn(); ///콜백 함수 검증을 위한 감시함수
    expect(changeStub).toHaveBeenCalledTimes(0);
    const input = shallow(
      <CheckBox name="required" onChange={changeStub}>
        테스트
      </CheckBox>,
    )
      .dive()
      .find('input');
    expect(input).toHaveLength(1);
    input.simulate('click', { target: { checked: true } }); //값 변경
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith('required', true); //인자 검사
    input.simulate('click', { target: { checked: false } });
    expect(changeStub).toHaveBeenCalledWith('required', false);
  });
});

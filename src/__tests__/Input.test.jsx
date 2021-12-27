import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Component/Input';

describe('<Input>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input name="test" />);
    }).not.toThrow();
  });

  it('has one element', () => {
    const wrapper = shallow(<Input name="zzz" />);
    expect(wrapper.length).toEqual(1); //객체의 수를 비교
    expect(wrapper).toHaveLength(1);
  });

  describe('contains <input>', () => {
    it('renders one input', () => {
      const wrapper = shallow(<Input name="test_name" />);
      expect(wrapper.find('input')).toHaveLength(1);
      expect(wrapper.find('label')).toHaveLength(1);
    });

    //프로퍼티에 전달된 값 검증
    it('assign the prop value and type', () => {
      const expectedValue = '123';
      const wrapper = shallow(<Input name="test" value={expectedValue} />);
      expect(wrapper.find('input').prop('value')).toBe(expectedValue); //value 값과 전달된 값 검증
      //   const { type, value } = wrapper.find('input').props(); //프로퍼티 항목 추출
      //   expect(value).toBe(expectedValue);
      //   expect(type).toBe('text');
    });
  });

  it('renders errorMsg', () => {
    const wrapper = shallow(<Input name="test" />);
    expect(wrapper.find('.error')).toHaveLength(0); //error 스타일을 포함한 오류 메세지 존재여부 확인
    const expectedErrorMsg = '옳지 않은 값 입력';
    wrapper.setProps({ errorMsg: expectedErrorMsg }); //setProps로 프로퍼티 값 변경
    expect(wrapper.find('span').prop('className')).toBe('error');
    expect(wrapper.find('.error')).toHaveLength(1);
    expect(wrapper.html()).toContain(expectedErrorMsg); //실제오류 메세지가 출력되는지 검증
  });

  it('calls back onChange on input change', () => {
    const changeStub = jest.fn(); //감시함수를 제공 (생성된 함수의 호출을 감시하는 방법)
    const wrapper = shallow(<Input name="test" onChange={changeStub} />);
    expect(changeStub).not.toHaveBeenCalled();
    //이벤트 재현 시점 기준으로 이벤트 실행 이전에는 콜백 함수가 호출되지 않은 상태룰
    //expect() 함수의 호출 검증 메소드 toHaveBeenCalled() 로 검증

    const expectedTargetValue = 'updated input';
    wrapper.find('input').simulate('change', { target: { value: expectedTargetValue } }); //target.value 형태로 전달되므로
    expect(changeStub).toHaveBeenCalledTimes(1); //
    expect(changeStub).toHaveBeenCalledWith('test', expectedTargetValue);
  });
});

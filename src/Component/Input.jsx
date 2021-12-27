import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  //클래스형 컴포넌트 작성

  constructor(props) {
    super(props);

    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //handleChange 메소드
  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }

  //componentDidMount() -> 컴포넌트가 화면에 그려진 후 호출
  componentDidMount() {
    if (this.props.autoFocus) {
      //autoFocus 값이 있으면 true
      this.ref.focus(); //this.ref 이 뭐더라?
    }
  }

  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  setRef(ref) {
    this.ref = ref; //객체에 주입
  }

  render() {
    const { errorMsg, label, name, value, type, onFocus } = this.props;
    return (
      <label>
        {label}
        <input
          id={`input_${name}`}
          ref={this.setRef}
          onChange={this.handleChange}
          onFocus={onFocus}
          value={value}
          type={type}
        />
        {errorMsg && <span className="error">{errorMsg}</span>}
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMsg: PropTypes.string,
};

export default Input;

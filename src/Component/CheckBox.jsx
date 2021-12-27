import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from '../04/withStyles';

class CheckBox extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //컴포넌트가 화면에 출력된 이후 처리
  componentDidMount() {
    if (this.props.autoFocus) {
      console.log(this.ref);
      this.ref.focus(); // 리액트가 제어하지 않는 컴포넌트를 제어할때 사용
      //ref : 브라우저상의 DOM 노드를 담는 역할
    }
  }

  handleClick(e) {
    const { name, onChange } = this.props;
    onChange(name, e.target.checked);
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMsg, label, children, styles, checked } = this.props;

    return (
      <label>
        {label}
        <div>
          <input
            ref={this.setRef}
            type="checkbox"
            checked={checked && 'checked'}
            onClick={this.handleClick}
          />
          {children}
        </div>
        {errorMsg && (
          <div>
            <span {...css(styles.errorText)}>{errorMsg}</span>
          </div>
        )}
      </label>
    );
  }
}

//프로퍼티 타입 명시
CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

//프로퍼티 기본값 명시
CheckBox.defaultProps = {
  autoFocus: false,
  checked: false,
  onChange: () => {},
};

//withStyles 로 curing 처리 (이부분 한번 더 보자)
export default withStyles(({ color, size }) => ({
  errorText: {
    fontSize: size.sm,
    color: color.error,
  },
}))(CheckBox);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends Component {
  render() {
    let msg1 = '';
    if (this.props.boolValue === false) {
      msg1 = 'boolValue 기본값이 false입니다';
    }

    let msg2 = '';
    if (this.props.boolValueWithoutDefault === false) {
      msg2 = 'boolValueWithoutDefault 기본값이 false입니다.';
    }

    return (
      <div>
        {msg1}
        {msg2}
      </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};

//기본값 선언
DefaultPropsComponent.defaultProps = {
  boolValue: false, //기본값이 false
};

export default DefaultPropsComponent;

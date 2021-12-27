import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends Component {
  render() {
    const { objValues, requiredStringValue } = this.props;

    return (
      <div>
        <div>객체값 : {String(Object.entries(objValues))}</div>
        <div>필수값 : {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  objValues: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;

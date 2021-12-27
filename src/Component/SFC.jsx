import React, { Component } from 'react';
import PropTypes from 'prop-types';

//함수형 컴포넌트
function SFC(props, context) {
  const { somePropValue } = props;
  const { someContextValue } = context;
  return <h1>Hello , {somePropValue} </h1>;
}

SFC.prototype = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: 'def' };

export default SFC;

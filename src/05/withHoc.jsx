import React from 'react';

//HOC의 기본 뼈대
export default function withHoc(WrappedComponent) {
  //WrappedComponent 기존컴포넌트 또는 재활용 컴포넌트

  const { displayName, name } = WrappedComponent;
  const wrappedComponentName = displayName || name;

  return class WithHoc extends React.Component {
    //display명을 변경한다 .
    static displayName = `withHoc(${wrappedComponentName})`;
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

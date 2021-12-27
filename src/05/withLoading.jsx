import React, { Suspense } from 'react';

export default function (loadingMsg) {
  return function withLoading(WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoading({ isLoading, ...otherProps }) {
      //로딩 중 메세지 추가하도록 withHoc  구성
      //기존 컴포넌트에 로딩 메세지 추출 기능을 추가하였다!
      if (isLoading) {
        console.log('123123123123' + typeof loadingMsg);
        return <Suspense fallback={loadingMsg} />;
      }

      return <WrappedComponent {...otherProps} />;
    }

    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
}

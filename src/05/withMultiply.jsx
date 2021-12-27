import React from 'react';

export default function withMultiply(WrappedComponent) {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function changeVal() {
    let val;
    val =
      Number(document.getElementById('input1').value) *
      Number(document.getElementById('input2').value);

    document.getElementById('input3').value = val;
  }
  //생성자 개념인가?
  function WithMultiply(props) {
    //로딩 중 메세지 추가하도록 withHoc 구성
    //기존 컴포넌트에 로딩 메세지 추출 기능을 추가하였다!
    if (props.needMultiply)
      return (
        <div>
          <WrappedComponent {...props} />;
          <br />
          피연산자1 : <input type="text" id="input1" onChange={changeVal} />
          X 피연산자2 : <input type="text" id="input2" onChange={changeVal} />
          =
          <input type="text" id="input3" />
        </div>
      );

    return <WrappedComponent {...props} />;
  }

  WithMultiply.displayName = `withMultiply(${wrappedComponentName})`;
  return WithMultiply;
}

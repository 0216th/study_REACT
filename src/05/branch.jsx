import React from 'react';
import branch from 'recompose/branch';
import Button from './../Component/Button';

//branch() 함수로 로딩 상태 표시 하이어오더 컴포넌트 만들기
//branch : 조건에 따라 다른 HOC를 출력하는 경우
function isLoading(props) {
  return props.isLoading;
}

function LoadingButton(props) {
  return '로딩 중';
}

export default branch(
  isLoading, //컨디션 (상태)
  () => LoadingButton, //참일때 반환되는 함수(left) ,
  // right 는 생략가능
)(Button);

//isLoading() 함수가 참이면 props.isLoading 메세지를 출력
//그렇지 않으면(로딩 완료시) LoadingButton 을 반환

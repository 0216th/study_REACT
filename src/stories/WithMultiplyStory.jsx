// Button , Text 컴포넌트를 확장된 컴포넌트로 생성

import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './../Component/Button';
import Text from './../Component/Text';
import withMultiply from './../05/withMultiply'; //HOC 처리할 컴포넌트

const ButtonWithHoc = withMultiply(Button);
const TextWithHoc = withMultiply(Text);

storiesOf('WithHoc', module)
  .addWithJSX('기본 설정', () => (
    <div>
      <ButtonWithHoc>안녕11</ButtonWithHoc>
      <TextWithHoc>안녕22</TextWithHoc>
    </div>
  ))

  .addWithJSX('large 예제', () => (
    <div>
      <ButtonWithHoc large>안녕11</ButtonWithHoc>
      <TextWithHoc large needMultiply>
        안녕22
      </TextWithHoc>
    </div>
  ));

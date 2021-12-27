import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CheckBox from '../Component/CheckBox';
import Text from '../Component/Text';

storiesOf('CheckBox', module)
  .addWithJSX('기본 설정', () => <CheckBox name="agree" />)
  .addWithJSX('children 예제', () => (
    <CheckBox name="agree">
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('label 예제', () => (
    <CheckBox name="agree" label="이름">
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('onChange 예제', () => (
    <CheckBox name="agree" onChange={action('onChange 이벤트 발생')}>
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('error 예제', () => (
    <CheckBox name="agree" label="이름" errorMsg="동의가 필요합니다.">
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('autofocus 예제', () => (
    <CheckBox name="agree" label="이름" autofocus checked>
      <Text>동의합니다</Text>
    </CheckBox>
  ));

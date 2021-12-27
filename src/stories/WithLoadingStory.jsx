import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../Component/Text';
import Button from '../Component/Button';
import withLoading from './../05/withLoading';

const ButtonWithLoading = withLoading(<Button disabled>로딩 중...</Button>)(Button);
console.log('innnnnnnnnnnnn : ' + ButtonWithLoading);

storiesOf('WithLoading', module)
  .addWithJSX('isLoading 예제', () => (
    <div>
      <ButtonWithLoading isLoading>안녕11</ButtonWithLoading>
    </div>
  ))

  .addWithJSX('기본 설정', () => (
    <div>
      <ButtonWithLoading>안녕11</ButtonWithLoading>
    </div>
  ));

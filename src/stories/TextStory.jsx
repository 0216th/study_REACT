import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../Component/Text';

storiesOf('Text', module)
  .addWithJSX('기본 설정', () => <Text>안녕하세요</Text>)
  .addWithJSX('large 예제', () => <Text large>안녕하세요</Text>)
  .addWithJSX('Xlarge 예제', () => <Text xlarge>안녕하세요</Text>);

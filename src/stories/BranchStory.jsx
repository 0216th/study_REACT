import React from 'react';
import { storiesOf } from '@storybook/react';

import BranchLoadingButton from '../05/branch';

storiesOf('Branch', module)
  .addWithJSX('기본 설정', () => <BranchLoadingButton>HI요</BranchLoadingButton>)

  .addWithJSX('isLoading 예제', () => <BranchLoadingButton isLoading>asdasd</BranchLoadingButton>);

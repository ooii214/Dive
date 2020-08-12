import React from 'react';

import BaseTemplate from 'components/base/BaseTemplate';
import DiveContainer from 'containers/dive/DiveContainer';
import { Route } from 'react-router-dom';

function divePage() {
  return (
    <BaseTemplate title='dive'>
      <Route exact path='/' component={DiveContainer} />
    </BaseTemplate>
  );
}

export default divePage;

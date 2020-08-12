import React from 'react';
import { inject, observer } from 'mobx-react';

import User from 'components/user/User';

import DiveStore from 'stores/dive';

interface Props {
  diveStore?: DiveStore;
}

@inject('diveStore')
@observer
class DiveContainer extends React.Component<Props> {
  private DiveStore = this.props.diveStore! as DiveStore;

  async componentDidMount() {
    await this.DiveStore.GetBoardsList();
  }

  insert = async () => {};

  update = async () => {};

  del = async () => {};

  render() {
    return <User diveList={this.DiveStore.DiveList} />;
  }
}

export default DiveContainer;

import DiveStore from './dive';

class RootStore {
  diveStore: DiveStore;
  constructor() {
    this.diveStore = new DiveStore(this);
  }
}
export default RootStore;

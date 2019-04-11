import { action, autorun, observable } from 'mobx';

class Store {
  @observable selectedAlarm = false;

  @action
  addAlarm = () => {
    this.selectedAlarm = !this.selectedAlarm;
  };
}

const store = new Store();
autorun(() => {
  console.log(store.selectedAlarm);
});

export default store;

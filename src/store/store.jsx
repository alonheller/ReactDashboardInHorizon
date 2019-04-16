import { action, observable } from 'mobx';

class Store {
  @observable selectedAlarm = false;

  @observable currentAlarm = false;

  @action
  addAlarm = alarm => {
    this.currentAlarm = alarm;
    this.selectedAlarm = !this.selectedAlarm;
  };
}

const store = new Store();

export default store;

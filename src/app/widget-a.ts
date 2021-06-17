import { Base } from './base';

export class WidgetA extends Base {
  constructor() {
    super();
    this.title = 'Widget A';
    this.value = 'A value';
    // this.listner(this.title, this.value);
  }
  start(callback) {
    this.listner = callback;
    this.listner(this.title, this.value);
  }
}

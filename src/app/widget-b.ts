import { Base } from './base';

export class WidgetB extends Base {
  constructor() {
    super();
    this.title = 'Widget B';
    this.value = 'B value';
    // this.listner(this.title, this.value);
  }
  start(callback) {
    this.listner = callback;
    this.listner(this.title, this.value);
  }
}

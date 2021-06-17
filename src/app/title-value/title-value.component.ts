import { Component, Input, OnInit } from '@angular/core';
import { WidgetA } from '../widget-a';
import { WidgetB } from '../widget-b';

@Component({
  selector: 'app-title-value',
  templateUrl: './title-value.component.html',
  styleUrls: ['./title-value.component.css']
})
export class TitleValueComponent implements OnInit {
  @Input() listner: string = 'b';
  title = 'Title';
  value = 'Value';

  widgets = { a: WidgetA, b: WidgetB };
  constructor() {}

  ngOnInit() {
    const widget = new this.widgets[this.listner]();
    widget.start((title, value) => {
      console.log(title, value);
      this.title = title;
      this.value = value;
    });
  }
}

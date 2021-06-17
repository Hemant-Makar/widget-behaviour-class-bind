import { Component, Input, OnInit } from '@angular/core';
import { Base } from '../base';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() title: string = 'Title';
  @Input() value: string = 'Value';

  constructor() {}

  ngOnInit() {}
}

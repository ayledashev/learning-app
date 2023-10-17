import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  @Input() stringValue: string;
  @Input() controlValue: string;
  @Output() sendData: EventEmitter<string> = new EventEmitter();

  name: string;

  ngOnInit() {
    console.log(this.stringValue);
    this.name = 'Pasha';
  }

  sendDataFromChild() {
    this.sendData.emit(this.name);
  }
}

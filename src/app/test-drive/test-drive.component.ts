import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-test-drive',
  templateUrl: './test-drive.component.html',
  styleUrls: ['./test-drive.component.scss']
})
export class TestDriveComponent implements OnInit, OnDestroy {
@Input() childValuees: string;
@Output() sendData:  EventEmitter<string> = new EventEmitter();
@Input() types: SelectItem[];
flag: boolean;
isShown: boolean;
nameArray: TextFor[] = [];

  emitMethod() {
    this.sendData.emit(this.childValuees + ' Порошин-лох');
    this.flag = !this.flag;
    this.isShown = !this.isShown;
  }
  ngOnInit(): void {
    console.log('onInit');
    this.flag = true;
    this.nameArray = [
      {
        name: 'hui',
        addText: true
      },
      {
        name: 'Pshin',
        addText: false
      },
      {
        name: 'jopa',
        addText: true
      }
    ];
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }
  
}

export class TextFor {
  name: string;
  addText: boolean;

}


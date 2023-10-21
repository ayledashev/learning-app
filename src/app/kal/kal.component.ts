import { Component } from '@angular/core';

@Component({
  selector: 'app-kal',
  templateUrl: './kal.component.html',
  styleUrls: ['./kal.component.scss']
})
export class KalComponent {
  numberValue = true;
  inputValue = 'Значение';
  objectValue = {name: 'Andrew', age: 25, isGood: false};
  
  log() {
    this.objectValue.name = 'Sava';
    console.log(this.numberValue);
    console.warn(this.inputValue);
  }

  getInputValue(): string {
    return 'Новое значение!';
  }

  logEvent() {
    console.log('AAAAAAAAAAAAAAAAA');
  }
}


export class ClassName {
  name: string;



}
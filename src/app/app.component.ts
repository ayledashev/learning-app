import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sumNumberOne = 232;
  sumNumberTwo: any;
  
  ngOnInit(): void {
    this.sumNumberTwo = '500';
    let stringCheck = this.sumNumberTwo + ': NUmber';
    console.log(stringCheck);

    if (typeof this.sumNumberTwo === 'number') {
      this.checkNumbers(this.sumNumberOne, this.sumNumberTwo);
    } else {
      console.log('NE CHISLO');
      let newNum = this.makeNumberPlusOne(this.sumNumberTwo);
      console.log('NOVOE CHISLO', newNum);
      this.checkNumbers(this.sumNumberOne, newNum);
    }
  }

  checkNumbers(num1: number, num2: number) {
    if (num1 == num2) {
      console.log('РАВНЫ');
    } else {
      console.log('НЕТ');
    }
  }

  makeNumberPlusOne(par: any): number {
    par = +par;
    par = par + 1;
    console.log('DELAY CHISLO', par);
    return par;
  }
}
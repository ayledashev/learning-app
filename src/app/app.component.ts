import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  biba = 'Biba';
  
  ngOnInit() {
    let a = 2;
    let b = 'Name';
    
    console.log(this.biba);
    this.checkNumbers(a, b);
  }

  checkNumbers(par: number, parr: any) {
    this.biba = 'JOPA';
    if (par === parr) {
      console.log('ДА');
      console.log(this.biba);
    } else {
      console.log('НЕТ');
      console.log(this.biba);
    }
  }
}

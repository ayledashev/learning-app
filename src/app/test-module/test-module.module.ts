import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModuleComponentComponent } from './test-module-component/test-module-component.component';



@NgModule({
  declarations: [
    TestModuleComponentComponent
  ],
  exports:[
    TestModuleComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestModuleModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModuleComponentComponent } from './test-module-component.component';

describe('TestModuleComponentComponent', () => {
  let component: TestModuleComponentComponent;
  let fixture: ComponentFixture<TestModuleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestModuleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

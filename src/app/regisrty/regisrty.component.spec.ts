import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisrtyComponent } from './regisrty.component';

describe('RegisrtyComponent', () => {
  let component: RegisrtyComponent;
  let fixture: ComponentFixture<RegisrtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisrtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisrtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalComponent } from './kal.component';

describe('KalComponent', () => {
  let component: KalComponent;
  let fixture: ComponentFixture<KalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

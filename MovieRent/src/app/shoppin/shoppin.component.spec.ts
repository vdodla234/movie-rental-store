import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinComponent } from './shoppin.component';

describe('ShoppinComponent', () => {
  let component: ShoppinComponent;
  let fixture: ComponentFixture<ShoppinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

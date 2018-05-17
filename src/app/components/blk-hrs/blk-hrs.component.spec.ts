import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlkHrsComponent } from './blk-hrs.component';

describe('BlkHrsComponent', () => {
  let component: BlkHrsComponent;
  let fixture: ComponentFixture<BlkHrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlkHrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlkHrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

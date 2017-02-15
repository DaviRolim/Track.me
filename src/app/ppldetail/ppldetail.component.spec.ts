/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PpldetailComponent } from './ppldetail.component';

describe('PpldetailComponent', () => {
  let component: PpldetailComponent;
  let fixture: ComponentFixture<PpldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

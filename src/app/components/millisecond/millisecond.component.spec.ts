/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MillisecondComponent } from './millisecond.component';

describe('MillisecondComponent', () => {
  let component: MillisecondComponent;
  let fixture: ComponentFixture<MillisecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillisecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillisecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

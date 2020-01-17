/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MinuteComponent } from './minute.component';

describe('MinuteComponent', () => {
  let component: MinuteComponent;
  let fixture: ComponentFixture<MinuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

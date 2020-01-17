import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  @ViewChild('year') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    let x = new Date().getFullYear();

    this.el.nativeElement.innerHTML = x;

  }

}

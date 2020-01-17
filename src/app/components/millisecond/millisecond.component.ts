import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'millisecond',
  templateUrl: './millisecond.component.html',
  styleUrls: ['./millisecond.component.css']
})
export class MillisecondComponent implements OnInit {

  @ViewChild('millisecond') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    let x = new Date(),
      ms = (x.getMilliseconds()),
      convert: string = "";

    if (ms < 10) {

      convert = '0' + ms;

      this.el.nativeElement.innerHTML = convert;

    } else {

      this.el.nativeElement.innerHTML = ms;

    }

  }

}

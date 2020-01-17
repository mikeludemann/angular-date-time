import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent implements OnInit {

  @ViewChild('hour') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    let x = new Date(),
      h = (x.getHours()),
      convert: string = "";

    if (h < 10) {

      convert = '0' + h;

      this.el.nativeElement.innerHTML = convert;

    } else {

      this.el.nativeElement.innerHTML = h;

    }

  }


}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @ViewChild('day') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    let x = new Date(),
      d = (x.getDate()),
      convert: string = "";

    if (d < 10) {

      convert = '0' + d;

      this.el.nativeElement.innerHTML = convert;

    } else {

      this.el.nativeElement.innerHTML = d;

    }

  }

}

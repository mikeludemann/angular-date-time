import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'minute',
  templateUrl: './minute.component.html',
  styleUrls: ['./minute.component.css']
})
export class MinuteComponent implements OnInit {

  @ViewChild('minute') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    let x = new Date(),
      min = (x.getMinutes()),
      convert: string = "";

    if (min < 10) {

      convert = '0' + min;

      this.el.nativeElement.innerHTML = convert;

    } else {

      this.el.nativeElement.innerHTML = min;

    }

  }

}

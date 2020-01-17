import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @ViewChild('second') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    let x = new Date(),
      sec = (x.getSeconds()),
      convert: string = "";

    if (sec < 10) {

      convert = '0' + sec;

      this.el.nativeElement.innerHTML = convert;

    } else {

      this.el.nativeElement.innerHTML = sec;

    }

  }

}

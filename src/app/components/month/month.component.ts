import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  @Input() format: string;

  @ViewChild('month') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    let x = new Date(),
      m = (x.getMonth() + 1),
      convert: string = "";

    if (this.format == "number") {

      if (m < 10) {

        convert = '0' + String(m);

        this.el.nativeElement.innerHTML = convert;

      } else {

        this.el.nativeElement.innerHTML = m;

      }

    } else if (this.format == "text") {

      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      this.el.nativeElement.innerHTML = months[x.getMonth()];

    } else {

      this.el.nativeElement.innerHTML = m;

    }

  }

}

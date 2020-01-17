import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  @ViewChild('week') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.el.nativeElement.innerHTML = this.getWeek();

  }

  getWeek() {

    var date = new Date();

    date.setHours(0, 0, 0, 0);

    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);

    var firstWeek = new Date(date.getFullYear(), 0, 1);

    return 1 + Math.round(((date.getTime() - firstWeek.getTime()) / 86400000 - 3 + (firstWeek.getDay() + 6) % 7) / 7);

  }

}

import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private datePipe: DatePipe
  ) {}

  change(event) {
    console.log(event);
  }

  dateFormat(date, format) {
    return this.datePipe.transform(date, format);
  }

}

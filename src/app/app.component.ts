import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  accIsOpened: boolean = false;
  accIsOpenedSecond: boolean = false;
  accIsOpenedThird: boolean = false;
  activeAcc(i: number) {
    if (i === 0) {
      this.accIsOpened = !this.accIsOpened;
    } else if (i === 1) {
      this.accIsOpenedSecond = !this.accIsOpenedSecond
    } else {
      this.accIsOpenedThird = !this.accIsOpenedThird
    }
  }

  ngOnInit() {
    if (localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'geo')
    }
  }

  getLang() {
    return localStorage.getItem('lang');
  }
}

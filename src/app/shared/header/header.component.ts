import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isGeo: boolean = true;
@HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  changeLang() {
    this.isGeo = !this.isGeo
    if (this.isGeo) {
      localStorage.setItem('lang', 'geo')
    } else {
      localStorage.setItem('lang', 'usa')
    }
  }
}

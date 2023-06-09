import {Component, DoCheck, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
    @HostListener('window:resize', ['$event'])
    onResize() {
        console.log(window.innerWidth)
        if (window.innerWidth < 691) {
            this.slide  = -547;
        }
    }

    ngOnInit() {
        if (window.innerWidth < 691) {
            this.slide = -547;
        }
    }

    disNext: boolean = false;
    disPrev: boolean = false;
    slide: number = -304;
    next() {
        this.slide += -466;
    }

    prev() {
            this.slide += +466;
    }
}

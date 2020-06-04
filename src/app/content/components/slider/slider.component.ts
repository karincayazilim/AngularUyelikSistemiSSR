import {AfterViewInit, Component, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onResize($event) {
    const height = $("#slider").height();
    $(".bc").css('height', height);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.onResize(null);
    }, 50);
  }

}

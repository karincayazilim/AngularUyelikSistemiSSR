import {Component, OnInit, AfterViewInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.onResize(null);
    }, 50);
  }
  onResize(event) {
    const height = $("#slider").height();
    $(".bc").css('height', height);
  }

}

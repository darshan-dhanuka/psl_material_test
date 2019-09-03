import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(location: PlatformLocation) {
    location.onPopState(() => {
       this.load();
   });
 }
  ngOnInit() {
  }
load()
{
  window.location.reload();
}
}

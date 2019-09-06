import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-banner',
  templateUrl: './popup-banner.component.html',
  styleUrls: ['./popup-banner.component.css']
})
export class PopupBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  close() {
    //console.log();
    document.getElementById('div_popupbanner').style.display = 'none';

  }
}

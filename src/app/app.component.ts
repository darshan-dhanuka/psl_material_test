import { Component, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from "./data.service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PSL-NEW';
  //user: object;
  public data1:any=[];
  constructor(private router: Router, private data: DataService,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
 
  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}
}

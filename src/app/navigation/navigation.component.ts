import { Component, OnInit,Inject } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';	
import { DataService } from "../data.service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user: SocialUser;
  details: UserDetails;
  message:string;
  constructor(public auth: AuthenticationService, private authService: AuthService, private data: DataService,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}


  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      
    });

    //this.data.currentMessage.subscribe(message => this.message = message);

    this.getFromLocal('message');
  }

  getFromLocal(key): void {
    //console.log('recieved here= key:' + key);
    this.data[key]= this.storage.get(key);
    this.message = '<i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp; Hello ' + this.data[key];
    //console.log(this.data[key]);
   }

  signOut(): void {
    this.authService.signOut();
    window.location.reload();
  }

}

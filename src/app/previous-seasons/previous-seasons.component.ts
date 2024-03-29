import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-previous-seasons',
  templateUrl: './previous-seasons.component.html',
  styleUrls: ['./previous-seasons.component.css']
})
export class PreviousSeasonsComponent implements OnInit {
  public show_dialog : boolean = false;
  public show_reg : boolean = false;
  public button_name : any = 'Show Login Form!';
  user: SocialUser;
  details: UserDetails;

  constructor(public auth: AuthenticationService, private authService: AuthService, location: PlatformLocation) {
    location.onPopState(() => {
       this.load();
   });
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      //console.log(user);
    });
  }
  load()
{
  window.location.reload();
}

toggle() {
  document.getElementById('divshow2').style.display = 'block';
}

togglereg() {
  document.getElementById('divreg').style.display = 'block';
}

signOut(): void {
  this.authService.signOut();
}

}

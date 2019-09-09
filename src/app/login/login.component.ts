import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

import { GoogleLoginProvider} from 'angularx-social-login';

const newLocal = 'block';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  public show_dialog : boolean = true;
  public show_reg : boolean = false;
  public button_name : any = 'Show Login Form!';
  public errorvar;

  user: SocialUser;
  credentials: TokenPayload = {
    id: 0,
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    state: 0,
    city: 0,
    dob:'',
    phone:'',
    address:'',
    uname:'',
    terms: false,
    referral_code: ""
  }

  constructor(public auth: AuthenticationService, private router: Router, private authService: AuthService ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      //console.log(user);
    });
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      result => {
        console.log(result);
        
        document.getElementById('divshow2').style.display = 'none';
        this.router.navigateByUrl('#home')
        
       
      },
      err => {
        //let errorvar = console.error(err);
        alert("Invalid Credentials!");
      }
    )
  }

  signInWithGoogle(): void {
   /* this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      x => console.log(x)

    );*/

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      () => {
        //alert("Welcome");
        this.socialsignin(this.user);
      },
      err => {
        console.error(err);
        alert("Invalid Credentials!");
      }
    )
  }

  socialsignin(user)
  {
    //console.log(user.email);
    this.auth.sociallogin(user).subscribe(
      () => {
        document.getElementById('divshow2').style.display = 'none';
        this.router.navigateByUrl('#home')
        
       
      },
      err => {
        console.error(err);
      }
    );
  }

  
  

  signOut(): void {
    this.authService.signOut();
  }
  toggle() {
    //console.log();
    document.getElementById('divshow2').style.display = 'none';

  }

  togglereg() {
    document.getElementById('divshow2').style.display = 'none';
    document.getElementById('divreg').style.display = 'block';
    
  }
  togglefp() {
    document.getElementById('divshow2').style.display = 'none';
    document.getElementById('divfp').style.display = newLocal;
    
  }

}

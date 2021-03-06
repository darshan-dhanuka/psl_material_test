import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { DataService } from "../data.service";
import { GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login';

const newLocal = 'block';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  public show_dialog : boolean = true;
  public show_reg : boolean = false;
  public social_var : any ;
  public errorvar;
  message:string;
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

  constructor(public auth: AuthenticationService, private router: Router, private authService: AuthService,private data: DataService ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      //console.log(user);
     
    });

    //this.data.currentMessage.subscribe(message => this.message = message);
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      result => {
        //console.log(result['name']);
        this.data.changeMessage(result['name']);
        document.getElementById('divshow2').style.display = 'none';
        this.router.navigateByUrl('#home')
        window.location.reload();
       
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
      result => {
        //console.log(result);
        this.social_var = result;
        this.socialsignin(result);
      },
      err => {
        console.error(err);
        //alert("Invalid Credentials!");
      }
    )
  }

  signInWithFB(): void {
    /* this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
       x => console.log(x)
 
     );*/
 
     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
       result => {
         //console.log(result);
         this.social_var = result;
         this.socialsignin(result);
       },
       err => {
         console.error(err);
         //alert("Invalid Credentials!");
       }
     )
   }

  socialsignin(user)
  {
    //console.log(user.email);
    this.auth.sociallogin(user).subscribe(
      () => {
        //console.log(this.social_var.firstName);
        this.data.changeMessage(this.social_var.firstName);
        document.getElementById('divshow2').style.display = 'none';
        //this.router.navigateByUrl('#home');
        window.location.reload();
        
       
      },
      err => {
        console.error(err);
      }
    );
  }


  
  

  signOut(): void {
    this.authService.signOut();
    this.data.changeMessage('');
    window.location.reload();
  }
  toggle() {
    //console.log();
    document.getElementById('divshow2').style.display = 'none';

  }

  togglereg() {
    window.location.reload();
    /*document.getElementById('divshow2').style.display = 'none';
    document.getElementById('divreg').style.display = 'block';*/
    
  }
  togglefp() {
    document.getElementById('divshow2').style.display = 'none';
    document.getElementById('divfp').style.display = newLocal;
    
  }

}

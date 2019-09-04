import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Router } from "@angular/router";
import { Component,OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login';

@Component({
	 selector: 'app-register',
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {

  states:any[];
  cities:any[];
  htmlStr:string;
  public show_terms : boolean = false;
  public show_dialog : boolean = true;
  user: SocialUser;
  credentials: TokenPayload = {
    id: 0,
    uname:"",
    name: "",
    email: "",
    password: "",
    state: null,
    city: null,
    phone: "",
    dob: "",
    address:"",
    terms: false,
    referral_code: ""
  };

  ngOnInit(){
    this.getStates();
      }

  constructor(private auth: AuthenticationService, private router: Router,private authService: AuthService ) {}

  register() {
    //let tempArr : any = [];
    //console.log("heeeeee===="+this.credentials);
    this.auth.register(this.credentials).subscribe(
      () => {
        document.getElementById('divreg').style.display = 'none';
        this.router.navigateByUrl('#home')
      },
      err => {
        //console.log(err.error);
        if(err.error.uname)
        {
          this.htmlStr = 'This username has already been taken.';
        }
        else if(err.error.email)
        {
         
          this.htmlStr = err.error.email[0];
        }
        window.scroll(0,0);
        //console.log('oops', error) 
      }
    );
  }

  toggle() {
    //console.log();
    document.getElementById('divreg').style.display = 'none';
  }

  showterms() {
    this.show_terms = !this.show_terms;
    document.getElementById('terms_div').style.display = 'block';
    this.show_terms = !this.show_terms;
  }

  // method to get the states
  getStates(){
    // call the api to get all the states
   //this.http.get('http://localhost/register/public/api/state').subscribe(
     //states=>this.states=states,err=>console.log(err));

     this.auth.getStates().subscribe(
      states=>this.states=states,
      err => {
        console.error(err);
      }
    );

  }

// method which will be triggered whenever user selects state
  onStateChange(stateId:number){
    this.credentials.state = null;
    //console.log(stateId);
    if (stateId) {
      this.credentials.state = stateId;
      this.auth.getCities(stateId).subscribe(
        cities=>this.cities=cities,
        err => {
          console.error(err);
        }
      );
    }
    else {
      this.cities = null;
    }

  }

  onCityChange(cityId:number){
    this.credentials.city = null;
    //console.log(cityId);
    if (cityId) {
      this.credentials.city = cityId;
    }
    else {
      this.cities = null;
    }

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


}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PlatformLocation } from '@angular/common';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';	
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  htmlStr:string;
  sendoptStr:string;
  validotpStr:string;
  email:string;
  public show_terms : boolean = false;
  public show_dialog : boolean = false;
  public show_reg : boolean = false;
  public button_name : any = 'Show Login Form!';
  user: SocialUser;
  errorcode: any;
  private form: any;
  credentials: TokenPayload = {
    id: 0,
    uname:"",
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    state: 0,
    city: 0,
    phone: "",
    dob: "",
    address:"",
    terms: false,
    referral_code: ""
  };
  details: UserDetails;
  constructor(public auth: AuthenticationService, private router: Router, private authService: AuthService, location: PlatformLocation) {
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

register() {
  //let tempArr : any = [];
  //console.log("heeeeee===="+this.credentials);
  this.auth.register(this.credentials).subscribe(
    () => {
      document.getElementById('reg_modal').style.display = 'none';
      document.getElementById('otp_modal').style.display = 'block';
      //this.router.navigateByUrl('#home')
      this.email = this.credentials['email'];
      this.htmlStr = "";
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

showterms() {
  this.show_terms = !this.show_terms;
  document.getElementById('terms_div').style.display = 'block';
  this.show_terms = !this.show_terms;
}

toggle() {
  document.getElementById('divshow2').style.display = 'block';
}

togglereg() {
  document.getElementById('divreg').style.display = 'block';
}

regstatic() {
  window.scrollTo(0, 0);
}

signOut(): void {
  this.authService.signOut();
}

keyPress(event: any) {
  const pattern = /[0-9]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}

sendotp_func(phone) {
  console.log(phone.value);
  
  this.form = phone.value;
 // console.log(this.form);
  this.auth.sendotp(this.form).subscribe(
   result => {
     
     this.errorcode = result['errorcode'];
     if(this.errorcode == 0)
     {
       //success
       document.getElementById('otp_sent_span').style.display = 'block';
       document.getElementById('otp_sent_error').style.display = 'none';
       this.sendoptStr = 'OTP has been sent to your mobile.';
 
     }
     else 
     {
       //failure
       document.getElementById('otp_sent_span').style.display = 'none';
       document.getElementById('otp_sent_error').style.display = 'block';
       this.sendoptStr = 'Oops..!! Something went wrong. Please try again.';
     }
    
    
   },
   err => {
     
   }
 )
 
 }
 
 

register_next(f2)
{
 //verify otp
 this.form = f2.value;
 //console.log(this.form);
 this.form['phone1'] = this.form['phone'];
 this.form['email'] =  this.email;
 //console.log(this.form);
    this.auth.otpfunc(this.form).subscribe(
      result => {
        
        this.errorcode = result['errorcode'];
        if(this.errorcode == 0)
        {
          //success
          document.getElementById('otp_valid_span').style.display = 'none';
          this.validotpStr = '';
          
          //register
          this.auth.up_register(this.form).subscribe(
            result => {
              
              this.errorcode = result['errorcode'];
              if(this.errorcode == 0)
              {
                //success
                window.location.reload();

              }
              else 
              {
                //failure

              }

            },
            err => {
              
            }
          )
        }
        else
        {
          //failure
          document.getElementById('otp_valid_span').style.display = 'block';
          this.validotpStr = 'Invalid OTP.';

        }

        //console.log(this.errorcode);
       
      },
      err => {
        
      }
    )
 
}



}

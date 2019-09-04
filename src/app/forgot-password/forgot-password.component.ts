import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form: any;
  errorcode: any;
  phonestring: number;
  phone:number;
  htmlStr: string;
  otp_text:string;
  constructor(public auth: AuthenticationService) {}

  ngOnInit() {
  }

  closefp() {
    document.getElementById('divfp').style.display = 'none';
    document.getElementById('divfrgtp').style.display = 'block';
    document.getElementById('divotp').style.display = 'none';
    document.getElementById('divrp').style.display = 'none';
    document.getElementById('divsuccess').style.display = 'none';
    this.htmlStr = "";
  }

  changenum() {
    document.getElementById('divfrgtp').style.display = 'block';
    document.getElementById('divotp').style.display = 'none';
    this.htmlStr = "";
  }


  keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  fp(f) {
    this.form = f.value;
    this.phone = this.form['phone'];
    //console.log(this.phone);
    this.auth.fp(this.form).subscribe(
      result => {
        
        this.errorcode = result['errorcode'];
        if(this.errorcode == 0)
        {
          //success
          document.getElementById('divfrgtp').style.display = 'none';
          document.getElementById('divotp').style.display = 'block';
          this.phonestring = this.phone;
          this.htmlStr = '';

        }
        else if(this.errorcode == 2)
        {
          //mobile number doesnt exist
          this.htmlStr = 'Mobile number does not exist.';
        }
        else 
        {
          //failure
          this.htmlStr = 'Oops..!! There was some error while sending the OTP. Please try again.';
        }
       
       
      },
      err => {
        
      }
    )
  }
  otpfunc(otp) {
    this.form = otp.value;
    this.form['phone1'] = this.phonestring;
    this.auth.otpfunc(this.form).subscribe(
      result => {
        
        this.errorcode = result['errorcode'];
        if(this.errorcode == 0)
        {
          //success
          document.getElementById('divotp').style.display = 'none';
          document.getElementById('divrp').style.display = 'block';
          this.htmlStr = '';

        }
        else
        {
          //failure
          this.otp_text = "";
          this.htmlStr = 'Invalid OTP.';

        }

        //console.log(this.errorcode);
       
      },
      err => {
        
      }
    )

  }
  rpfunc(rp) {
   
    this.form = rp.value;
    this.form['phone1'] = this.phonestring;
    console.log(this.form);
    this.auth.rpfunc(this.form).subscribe(
      result => {
        
        this.errorcode = result['errorcode'];
        if(this.errorcode == 0)
        {
          //success
          document.getElementById('divrp').style.display = 'none';
          document.getElementById('divsuccess').style.display = 'block';
          this.htmlStr = '';

        }
        else
        {
          //failure
          this.htmlStr = 'Mobile number doesnt exist.';

        }

       
      },
      err => {
      
      }
    )

  }
}

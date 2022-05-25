import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LogForm:FormGroup;
 submitted=false;
pass:any;
 validation_message = {
  'email': [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Enter a valid email' }
  ],
  'password': [
    { type: 'required', message: 'Password is required' },
    { type: 'minlength', message: 'Password must be at least 5 characters long' },
    { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
  ],
 }
  constructor(private auth: AuthService, private http: HttpClient, private router: Router,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.LogForm = this.formbuilder.group({
      user_email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength,
        Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')
      ]
   ]
  
    })
    console.log( this.LogForm.controls);
  }
  get f() {
    
    
    return this.LogForm.controls;
 }
  // oninput(event){
  //   console.log(event.target.value);
  //  this.pass=event.target.value 
  // }


  onSubmit() {
    this.submitted = true;
    if(this.LogForm.valid){
      this.auth.onLogin(this.LogForm.value).subscribe(result => {
        localStorage.setItem('Token', result.response.accessToken)
        this.router.navigate(['userlist'])
      }
  
      )
    }
   
  

    
  

  }
}

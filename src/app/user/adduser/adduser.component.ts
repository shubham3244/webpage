import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  constructor(private user: UserService, private router: Router) { }
  ngOnInit(): void {

  }
  AddForm = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    isnotify: new FormControl(),
    password: new FormControl(),
    user_email: new FormControl(),
    user_type: new FormControl(),
  })

  onSubmit() {
    this.user.onAdduser(this.AddForm.value).subscribe((response) => {
      // console.log(response);
      this.router.navigate(['userlist'])

    })
  }
  onEdit() {
    this.AddForm.patchValue({
      first_name: 'shubham',
      last_name: 'male',
      isnotify: true,
      password: 12345,
      user_email: 'shubhamrana2323@gmail.com',
      user_type: 'admin',
    })
  }



}

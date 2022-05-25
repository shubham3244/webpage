import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  public id: any;
  constructor(private user: UserService, private router: Router, private activated: ActivatedRoute) { }
  EditForm = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    isnotify: new FormControl(),
    user_email: new FormControl(),
    user_role: new FormControl(),
  })




  ngOnInit(): void {
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');

      this.user.onEdit(this.id).subscribe((datas: any) => {

        this.EditForm.patchValue(datas.response.data)

      })
    });

  }
  onSubmit() {
    var editforms = {
      ...this.EditForm.value,
      userid: this.id
    }


    this.user.onEditForm(editforms).subscribe((response) => {

      console.log(response);

      this.router.navigate(['userlist'])
    })


  }


}

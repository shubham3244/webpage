import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
// import { UserComponent } from './user/user.component';
import { AdduserComponent} from  './adduser/adduser.component'
// import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
// import { DeleteComponent } from './delete/delete.component';
// import { EdituserdetailComponent } from './edituserdetail/edituserdetail.component';


@NgModule({
  declarations: [
    // UserComponent,
    // AdduserComponent,
    // UserlistComponent,
    // EdituserComponent,
    // DeleteComponent,
    // EdituserdetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

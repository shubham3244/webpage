import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { LoginComponent } from './login/login.component';
import { AdduserComponent} from './user/adduser/adduser.component'
// import { DeleteComponent } from './user/delete/delete.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { UserlistComponent } from './user/userlist/userlist.component';

const routes: Routes = [
{path:'', component:LoginComponent},
{path:'login', component:LoginComponent},

{path:'userlist', component:UserlistComponent,canActivate:[AuthguardGuard],loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
{path:'adduser', component:AdduserComponent, canActivate:[AuthguardGuard]},
{path:'edituser', component:EdituserComponent, canActivate:[AuthguardGuard]},
{path:'edituser/:id', component:EdituserComponent, canActivate:[AuthguardGuard]},
// {path:'delete', component:DeleteComponent, canActivate:[AuthguardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

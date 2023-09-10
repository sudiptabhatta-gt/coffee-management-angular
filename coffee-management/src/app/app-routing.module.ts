import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { authGuard } from './guard/auth.guard';
import { notAuthGuard } from './guard/notAuth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent, canActivate: [notAuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [notAuthGuard]},
  {path: 'home', component: UserListComponent, canActivate: [authGuard]},
  {path: 'user/:id', component: SingleUserComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

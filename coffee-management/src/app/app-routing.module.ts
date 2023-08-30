import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

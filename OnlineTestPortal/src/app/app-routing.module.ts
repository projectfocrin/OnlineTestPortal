import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'quizes', component:QuizzesComponent},
  {path:'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

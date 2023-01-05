import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendenceComponent } from './attendence/attendence.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassoneComponent } from './classone/classone.component';
import { AttendeeComponent } from './attendee/attendee.component';
import { StudentComponent } from './student/student.component'
import { ClassfourComponent } from './classfour/classfour.component';
import { FormComponent } from './form/form.component';
import { ClasstwoComponent } from './classtwo/classtwo.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotComponent } from './forgot/forgot.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'form',component:FormComponent},
  {path:'classtwo',component:ClasstwoComponent},
  {path:'attendence',component:AttendenceComponent},
  {path:'classes',component:ClassesComponent},
  {path:'classone',component:ClassoneComponent},
  {path:'attendee',component:AttendeeComponent},
  {path:'student',component:StudentComponent},
  {path:'classfour',component:ClassfourComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  { path:'profile',component:ProfileComponent},
  { path:'forgot',component:ForgotComponent},
{path:'test',component:TestComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

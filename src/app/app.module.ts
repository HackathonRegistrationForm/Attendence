import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AttendenceComponent } from './attendence/attendence.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassoneComponent } from './classone/classone.component';
import { ClassfourComponent } from './classfour/classfour.component';
import { FormsModule } from '@angular/forms';
//import { AttendeeComponent } from './attendee/attendee.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { MatFormFieldModule} from '@angular/material/form-field'; 
import { FormComponent } from './form/form.component';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';

import { MatRadioModule } from '@angular/material/radio';
import { ClasstwoComponent } from './classtwo/classtwo.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './profile/profile.component';
//import { ForgotComponent } from './forgot/forgot.component';
import {DataTablesModule} from 'angular-datatables';
import {NgxPaginationModule} from 'ngx-pagination';
import { DatePipe } from '@angular/common';
//import { TestComponent } from './test/test.component';




@NgModule({
  declarations: [
   
 
    AppComponent,
    //AttendenceComponent,
    
    ClassesComponent,
    ClassoneComponent,
    ClassfourComponent,
FormComponent,
    //AttendeeComponent,
    StudentComponent,
    ClasstwoComponent,
    LoginComponent,
    AboutusComponent,
    ContactusComponent,
    ProfileComponent,
   // ForgotComponent,
 
   // TestComponent,
 

  
 

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule ,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgxPaginationModule,
    DataTablesModule
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {  }


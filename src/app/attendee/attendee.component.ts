import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.css']
})
export class AttendeeComponent implements OnInit {
  student:any;
Student: any;
searchtext:any;
Attendence: any;
data: any;
StudentArray: any;
edit: any;
Delete: any;
Studentname: any;
Rollno: any;
Professorname: any;
DateofBirth: any;
Rgnumber: any;
Phonenumber: any;
  data1: any;


  constructor() { }
  texts: any=[]

  ngOnInit(): void {
    this.data=JSON.parse(localStorage.getItem('studentattendence') || '{}')
    this.texts.push(this.data)
    console.log(this.data)
    this.data1=JSON.parse(localStorage.getItem('studentattendence1') || '{}')
    this.texts.push(this.data1)
    console.log(this.data1)
   
  }

  // toggle(){
  //   this.student=!this.student
  // }




  }




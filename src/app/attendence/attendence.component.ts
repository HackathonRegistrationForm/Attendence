import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
 
Studentname: any;
Rollno: any;
Professorname: any;
DateofBirth: any;
Attendence: any;
Rgnumber: any;
Phonenumber: any;
 
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    const Obj = {
      Studentname:this.Studentname,
      Rollno: this.Rollno,
      Professorname: this.Professorname,
      DateofBirth: this.DateofBirth,
      Phonenumber: this.Phonenumber,
      Rgnumber: this.Rgnumber,
      Attendence:this.Attendence
      }
    localStorage.setItem('studentattendence',JSON.stringify(Obj));
  
    console.log()
    console.log(this.Studentname)
    console.log(this.Rollno)
    console.log(this.Professorname)
    console.log(this.Phonenumber)
    console.log(this.DateofBirth)
    console.log(this.Rgnumber)
    console.log(this.Attendence)
    
  



    


    const Obj1 = {
      Studentname:this.Studentname,
      Rollno: this.Rollno,
      Professorname: this.Professorname,
      DateofBirth: this.DateofBirth,
      Phonenumber: this.Phonenumber,
      Rgnumber: this.Rgnumber,
      Attendence:this.Attendence
      }
  
      localStorage.setItem('studentattendence',JSON.stringify(Obj));
    
  

}
}

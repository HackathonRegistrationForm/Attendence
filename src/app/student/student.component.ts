import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  required:any;
  Studentname: any;
  Rollno: any;
  Professorname: any;
  Phonenumber: any;
  DateofBirth: any;
  Rgnumber: any;
  Attendence: any;
  comment:any;
  showForm = false;
  //Showpopup=false;
  showComent=false;
  studentId:any;
  sid:any;
  data: any;
  save=false;
  update=false;
  btnedit=true;
  searchtext:any;
  Obj: any;
  Data: any;                     //we are declaring all properties here
  Srno:any
  array: any;
  postData: any;
  student:any;
  Presentvalue=false;
  Present1=false;
  displayform=false;
  ShowComment=false;
  class: any;
  Rollnoerr=false
  present:boolean=false
  Student:any={
    sid:0,      
    Studentname:'',  
    Rollno:'',
    Professorname:'',
    Phonenumber:'',
    Rgnumber:'',
   DateofBirth:'', 
   Attendence:''
  }
  comments:any={
    cid:0,
    comment:''          //taking comments propery to give empty values  
  };
  Showpopup= false;
  Showaddpopup= false;        //popup directive declaration
  uma: any;
  ViewComments: any;
  StudentAttendence: any;
AttendenceList:any;
  constructor() { }
  texts: any=[]           //Declaring array for display details array format
presented:any
absented:any
addtext:any=[]         
  ngOnInit(): void {
  
    const localdata = localStorage.getItem('studentattendence')  // getting studentattendence details and  assigning studentattendence details to localData
          
    if(localdata!=null){                                          // Comparing the local data is Null Or Not                                       
      this.texts =JSON.parse(localdata)                            // If the local data is not null then it will add to Texts arry in a  Json format                               
    }

    const localdata1 = localStorage.getItem('Addcomment')  // getting studentattendence details and  assigning studentattendence details to localData
          
    if(localdata1!=null){                                          // Comparing the local data is Null Or Not                                       
      this.addtext =JSON.parse(localdata1)                            // If the local data is not null then it will add to Texts arry in a  Json format                               
    }
    
  }


  openForm(){ 
    this.showForm=true;
  this.update=false;
this.save=true;
   }
  

     onAdd(){  
     
      this.Student.sid = this.texts.length+1;
      if(this.Student.Rollno==""|| this.Student.Studentname=="" || this.Student.Phonenumber==""|| this.Student.Rgnumber=="" || this.Student.DateofBirth=="")
      {
        alert("Please enter all fields")
        
      }  
      else{
      
        if(this.texts.find((m: { Rollno: any; }) => m.Rollno==this.Student.Rollno))
      {
        alert('this Roll No is Already Exists!! ')
       
      } 
      if(this.texts.find((m: { Rgnumber: any; }) => m.Rgnumber==this.Student.Rgnumber))
      {
        alert('this RgNo is Already Exists!! ')
       
      } 
       
       
    
   else
   alert("data added successfully")
   
      {                                                             //  default sid is 0, here it will incease +1 of the array length. and assigend to sid 
      this.texts.push(this.Student)                                       //push the student property  into texts array   
      localStorage.setItem('studentattendence',JSON.stringify(this.texts)) 
     
      
      }
   
    }
      this.closeForm(); 
                                                  //post the details into localstorage
      this.Student={                                                 //clearing student property details here 
       sid:0,
        Studentname:'',  
        Rollno:'',                               
        Professorname:'',
        Phonenumber:'',
        Rgnumber:'',
       DateofBirth:'',
       Attendence:''
       
      }
    }
      openFormedit(texts:any){  
        debugger                                    // fetching the details of the student to the texts 
        this.Student=texts                                            // assigning the texts to the student property
            
        this.save=false;
     this.update=true;
      this.showForm=true;  
      }     
      onUpdate(){
        debugger        
        const record = this.texts.find((m: { Sid: any; }) => m.Sid == this.Student.Sid)
        if(this.Student.Rollno==""|| this.Student.Studentname=="" || this.Student.Phonenumber==""|| this.Student.Rgnumber=="" || this.Student.DateofBirth=="")
      {
        alert("Please enter all fields") 
      }  else{                                                            // when we click on edit button we got the student details ,here  we are finding  the student.sid into the  array and getting that updatedrecord . 
        localStorage.setItem('studentattendence',JSON.stringify(this.texts))  
      }                                                        //post the updatedrecord to localstorage       
        this.closeForm(); 
        window.location.reload()
        return true   
       }



       
       onDelete(id:number){ 
        if(confirm('Are you sure to delete the record?'))
         
        for (let i =0; i< this.texts.length;i++){                   
          if(this.texts[i].sid == id){                            // here it is comapring the id and array of sid  to find the record, it will loop when the condition will satisfied
            this.texts.splice(i,1)                                // if it finds the record it will remove that record from array
          }
        }
        
        
        localStorage.setItem('studentattendence',JSON.stringify(this.texts))             // post the  texts array after deleting
      }


              view(data: any){
       
                this.Student=data                                                //assigning data to student  property
             
        this.Showpopup=true; 
        
               } 
               


           SaveComment(){
            
              this.comments.cid = this.addtext.length+1;             // this is also post call for comments method
                  this.addtext.push(this.comments)
                  const record = this.addtext.find((m: { cid: any; }) => m.cid == this.comments.cid)
                  console.log(record)
                  localStorage.setItem('Addcomment',JSON.stringify(this.addtext))
                  console.log(this.comments)
                  this.comments={
                    cid:0,
                    comment:''         
                  }
                 
                }
                


         toggle(){
          this.student=!this.student             //open and closing the form data using thism method      
         }
         toggleclass(){
          this.class=!this.class
         }
       
       addcloseForm(){
        this.Showpopup=false;               //purpose of close the popup window
       }   
     closeForm(){
       this. showForm=false;
       }

     
            }
          



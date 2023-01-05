import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {


  email : string = '';
  auth: any;

  constructor() { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}

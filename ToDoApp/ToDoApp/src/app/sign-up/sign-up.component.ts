import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  signupForm:FormGroup;


  ngOnInit() {

    this.signupForm = new FormGroup({

      'firstname':new FormControl(null,Validators.required),
      'lastname':new FormControl(null,Validators.required),
      'phoneNumber':new FormControl(null,[Validators.required,Validators.maxLength(12),Validators.minLength(10)]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
       'password':new FormControl(null,Validators.required)
    })


  }


  OnSubmit(){
    console.log(this.signupForm);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('myLocalReference') myForm:NgForm;
  constructor() { }

  formSubmitted:boolean=false;
  genders = ['male','female'];
  user={

    username:'',
    email:'',
    gender:'',
    secretQuestion:''
  }

  ngOnInit() {
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    // to pre-set the entire form values
   /*  this.myForm.setValue({

      userdata:{
        username:"vinayak",
        email:"jnvjufvn@kmvk.voifjmv"

      },
      secret:'teacher',
      gender:'male'

    }); */
// to set only selected fileds without resetting the existing fields.
    this.myForm.form.patchValue({
      userdata:{
        username:"vinayak"
      }
    })

  }

  /* submitForm(form:NgForm){
    console.log(form);
  } */

  submitForm(){
    console.log(this.myForm);
this.formSubmitted = true;
    this.user.username = this.myForm.value.userdata.username;
    this.user.email = this.myForm.value.userdata.email;
    this.user.secretQuestion = this.myForm.value.secret;
    this.user.gender = this.myForm.value.gender;

   
  }
  
  resetForm(){
    this.myForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-reactive-approach-form',
  templateUrl: './reactive-approach-form.component.html',
  styleUrls: ['./reactive-approach-form.component.css']
})
export class ReactiveApproachFormComponent implements OnInit {

  signUpForm: FormGroup;
  genders = ['male', 'female'];
  constructor() { }
  forbiddenUserName = ['vinayak', 'kaviskar'];
  ngOnInit() {

    /* 
    
        this.signUpForm  = new FormGroup({
    
          'username':new FormControl(null,Validators.required),
          'email':new FormControl(null,[Validators.required,Validators.email]),
          'gender':new FormControl('male')
    
    
    
    
        }); */

    this.signUpForm = new FormGroup({

      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.myCustomValidator.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.myCustomAsyncValidator)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])


    });




    // staus and value changes of form
    this.signUpForm.statusChanges.subscribe(status => {
      console.log(status);
    });

    this.signUpForm.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  onSubmit() {
    console.log(this.signUpForm);
  }
  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  myCustomValidator(inputParam: FormControl): { [s: string]: boolean } {


    if (this.forbiddenUserName.indexOf(inputParam.value) !== -1) {
      return { 'forbiddenUsernamr': true };
    } else {
      return null;// return null or return nothing is important
    }

  }

  myCustomAsyncValidator(inputparam2: FormControl): Promise<any> | Observable<any> {

    let myPromise = new Promise((resolve, reject) => {

      setTimeout(() => {
        if (inputparam2.value === "vinayak@kpit.com")
          resolve({ 'forbiddenEmail': true });
        else
          resolve(null);
      }, 3000);


    });
    return myPromise;



  }

  checkSetValue() {
    this.signUpForm.setValue({

      'userData': { 'username': 'mAx', 'email': 'max@max.com' },
      'gender': 'male',
      'hobbies': []


    });

  }

  checkPatchValue() {
    this.signUpForm.patchValue({

      'userData': { 'username': 'mAxPATCHED', },

    });

  }

  resetForm(){
    this.signUpForm.reset();
  }
}

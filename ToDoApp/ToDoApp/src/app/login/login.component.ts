import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToDoAppService } from '../to-do-app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm:FormGroup;



  constructor( public loginRouter :Router,private http:HttpClient , private dataService:ToDoAppService) { }



  ngOnInit() {

    this.loginForm = new FormGroup({

      'email':new FormControl(null,[Validators.required,Validators.email]),
       'password':new FormControl(null,Validators.required)
    });


  }


  OnSubmit(){
    console.log(this.loginForm);



    localStorage.setItem('key',"hello moto");
    
    

    let loginRequestObject:LoginRequestBody  = { 'email': this.loginForm.get('email').value ,'password' : this.loginForm.get('password').value};
    console.log(loginRequestObject);
    this.dataService.login(loginRequestObject).subscribe( (success)=>{

        let response:any = success;
      console.log(response);
      localStorage.setItem('token',response.token);

      this.dataService.loggedInUserId = Number.parseInt(response.user.id.toString());
      console.log(this.dataService.loggedInUserId)  ;

      this.loginRouter.navigate(['/todolist']);

    }, 
    (error)=>{
        console.log(error);
    });






  }

}
interface LoginRequestBody{
  
email:string,
password:string

}
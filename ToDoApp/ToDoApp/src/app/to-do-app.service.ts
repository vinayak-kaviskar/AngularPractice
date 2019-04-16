import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ToDoAppService {

  constructor(private http: HttpClient) { }

  private _loggedInUserId: number;
  public get loggedInUserId(): number {
    console.log("in getter");
    return this._loggedInUserId;
  }
  public set loggedInUserId(value: number) {
    console.log("in setter");
    this._loggedInUserId = value;
  }


  login(requestObject:any):Observable <any> {


    return this.http.post("http://localhost:8080/login",requestObject);
  }

  signup(requestObject:any):Observable <any> {


    return this.http.post("http://localhost:8080/registration",requestObject);
  }

  getTasks(userId:any):Observable <any> {

 
    if(localStorage.getItem('token')){
      let token = localStorage.getItem('token');
    

    let headers = new HttpHeaders();
    headers.append("Authorization","Bearer "+token);
    headers.append('Access-Control-Allow-origin','*');
    return this.http.get("http://localhost:8080/getall/"+userId,{headers:headers});

    }else{
      console.error("No key found ");
    }
  }

  addTask(requestObject: Task):Observable <any> {

    if(localStorage.getItem('token')){
      let token = localStorage.getItem('token');
    

    let headers = new HttpHeaders();
    headers.append("Authorization","Bearer "+token);
    headers.append("Content-Type","application/json");
      console.log("req");

      let req = {

        id : requestObject.id,
        userId:requestObject.userId,

        taskName: requestObject.taskName,
       
        reminderTime: requestObject.reminderTime,
        isCompleted:   requestObject.isCompleted,
        isNotified: requestObject.isNotified


      }
      
       
      console.log(req);
    return this.http.post("http://localhost:8080/addtask",req ,{headers:headers});
    }else{
      console.error("No key found ");
    }
  }

  updateTask(requestObject:any,taskId:number):Observable <any> {

    if(localStorage.getItem('token')){
      let token = localStorage.getItem('token');
    

    let headers = new HttpHeaders();
    headers.append("Authorization","Bearer "+token);

    let req = {

      id : requestObject.id,
      userId:requestObject.userId,

      taskName: requestObject.taskName,
     
      reminderTime: requestObject.reminderTime,
      isCompleted:   requestObject.isCompleted,
      isNotified: requestObject.isNotified


    }
    

    return this.http.put("http://localhost:8080/updatetask/"+taskId,req);
    }else{
      console.error("No key found ");
    }
  }

  deleteTask(taskId:number):Observable <any> {

    if(localStorage.getItem('token')){
      let token = localStorage.getItem('token');
    

    let headers = new HttpHeaders();
    headers.append("Authorization","Bearer "+token);
    return this.http.delete("http://localhost:8080/deletetask/"+taskId);
    }else{
      console.error("No key found ");
    }
  }

}

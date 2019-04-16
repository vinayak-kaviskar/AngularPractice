import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  TaskList:any[]=[];

constructor(private http:HttpClient){

}


ngOnInit(){

  this.http.get("http://localhost:8080/getall").subscribe((success)=>{

  console.log(success);
  let response :any= success
  this.TaskList = response;

  console.log(this.TaskList);

  },
  (error)=>{

  console.log(error);
  });
}

}

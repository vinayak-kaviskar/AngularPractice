import { Component, OnInit } from '@angular/core';
import { ToDoAppService } from '../to-do-app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  tasksList: any;
  taskForm: FormGroup;
  addtaskObject: Task = new Task();

  constructor(private dataService: ToDoAppService) { }

  ngOnInit() {


    this.taskForm = new FormGroup({
      'taskName': new FormControl(null, Validators.required),
      'taskDate': new FormControl(null, Validators.required)
    });



    console.log("logged in userId:" + this.dataService.loggedInUserId)

    this.getTasks();





  }
  addTask() {
    console.log(this.taskForm);

    this.addtaskObject.userId = this.dataService.loggedInUserId;
    this.addtaskObject.isCompleted = false;
    this.addtaskObject.isNotified = 0;
    this.addtaskObject.taskName = this.taskForm.get('taskName').value;
    this.addtaskObject.reminderTime = this.taskForm.get('taskDate').value;

    console.log(this.addtaskObject);
    this.dataService.addTask(this.addtaskObject).subscribe(

      (success) => {

        console.log("in success");

        this.getTasks();
        this.taskForm.reset();
      },
      (error) => {
        console.log("in error");

        console.log(error);

      }


    );
  }


  getTasks() {
    console.log("in get tasks method");
    this.dataService.getTasks(this.dataService.loggedInUserId).subscribe(
      (success) => {
        this.tasksList = success;

        console.log("I success");
        console.log(this.tasksList);
      },
      (error) => {
        console.log("I error");
      }
    );
  }

  updateTask(taskObj:Task) {
    console.log(taskObj);

    this.addtaskObject.userId = this.dataService.loggedInUserId;
    this.addtaskObject.isCompleted = true;
    
    this.addtaskObject.taskName = taskObj.taskName;
    this.addtaskObject.reminderTime = taskObj.reminderTime;

    console.log(this.addtaskObject);
    this.dataService.updateTask(this.addtaskObject,taskObj.id).subscribe(

      (success) => {

        console.log("in success");

        this.getTasks();
        this.taskForm.reset();
      },
      (error) => {
        console.log("in error");

        console.log(error);

      }


    );
  }

  deleteTask(taskObj){

    console.log(taskObj);

    

    console.log(this.addtaskObject);
    this.dataService.deleteTask(taskObj.id).subscribe(

      (success) => {

        console.log("in success");

        this.getTasks();
        this.taskForm.reset();
      },
      (error) => {
        console.log("in error");

        console.log(error);

      }


    );

  }
}

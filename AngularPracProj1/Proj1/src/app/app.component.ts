import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proj1';

 
  servers :string[] = ['server 1','server 2'];
  serverName:string;



  showBasicsFlag:boolean = false;
  showDataBindingContentFlag: boolean=false;
  showTemplateDrivenFormComponent:boolean = false;
  showReactiveFormComponent:boolean = false;

toggleBasics(){

this.showBasicsFlag = !this.showBasicsFlag;

this.showDataBindingContentFlag =false;
this.showTemplateDrivenFormComponent = false;
this.showReactiveFormComponent = false;
}

toggleDataBindingContent(){

  this.showBasicsFlag = false;
  this.showTemplateDrivenFormComponent = false;
  this.showDataBindingContentFlag = !this.showDataBindingContentFlag;
  this.showReactiveFormComponent = false;
}
toggleFormsTemplateDriven(){

  this.showBasicsFlag= false;
  this.showDataBindingContentFlag=false;
  this.showTemplateDrivenFormComponent = true;
  this.showReactiveFormComponent = false;

}

toggleReactiveFormDriven(){

  this.showBasicsFlag= false;
  this.showDataBindingContentFlag=false;
  this.showTemplateDrivenFormComponent = false;
  this.showReactiveFormComponent = true;

}


addServer(){

  this.servers.push(this.serverName);
}

}

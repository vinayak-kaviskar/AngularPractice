import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {

     setTimeout(()=>{
       this.allowNewServer = true;
     },2000)

   }


  serverId:number = 10;
  serverStatus:string = "Offline";
  allowNewServer:boolean = false;
  serverName:string = "No Server Added yet";
  serverName2:string="Initial string value for 2-way data binding";

  serverStatusString:string = "";
  ngOnInit() {
alert("Testing wether ngoninit loads if *ngIf on the component tag is false");
    this.serverStatusString = Math.random()>0.5? 'online':'offline';
  }

 

getServerStatus(){
  return this.serverStatus;
}

onButtonClick(){
  console.log("Button Pressed");
}



onUpdateChange(event:Event){

  //type casting event to HTMLInputEvent to remove an error.
  this.serverName = (<HTMLInputElement>event.target).value;

}


getServerStatusString(){
  return this.serverStatusString;
}

getColor(){

  return this.serverStatusString === 'online'? 'green':'red';
  
  }
  
}

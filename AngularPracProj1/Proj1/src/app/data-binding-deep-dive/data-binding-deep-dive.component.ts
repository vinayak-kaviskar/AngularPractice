import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-data-binding-deep-dive',
  templateUrl: './data-binding-deep-dive.component.html',
  styleUrls: ['./data-binding-deep-dive.component.css'],
  encapsulation: ViewEncapsulation.Emulated /// Emulated , None,Native.
})
export class DataBindingDeepDiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  serverElements = [{type : "server",name:"server1",content:"content of server 1"},
  {type : "blueprint",name:"server2",content:"content of server 2"}];
 

  onAddServer(ServerData) {
    console.log(ServerData);
     this.serverElements.push({
       type: 'server',
       name: ServerData.serverName,
       content: ServerData.serverContent
     });
 
    console.log(this.serverElements);
   }
 
   onAddBlueprint(Blueprintdata) {
     console.log(Blueprintdata);
     this.serverElements.push({
       type: 'blueprint',
       name: Blueprintdata.serverName,
       content: Blueprintdata.serverContent
     });
 
     console.log(this.serverElements);
   }
}

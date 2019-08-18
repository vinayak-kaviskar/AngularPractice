import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-add-new-server',
  templateUrl: './add-new-server.component.html',
  styleUrls: ['./add-new-server.component.css']
})
export class AddNewServerComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  constructor() { }

  ngOnInit() {
  }  
  onAddServer() {
   /*  this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    }); */

    this.serverCreated.emit({serverName:this.newServerName, serverContent:this.newServerContent});
  }

  onAddBlueprint() {
   /*  this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    }); */

    this.blueprintCreated.emit({serverName:this.newServerName, serverContent:this.newServerContent});
  }
}

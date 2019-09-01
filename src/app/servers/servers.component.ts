import { Component , OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
templateUrl:'servers.component.html'

})
export class Serverscomponent implements 
OnInit {
  btn1status;
  servercreationstatus="server not created";
  servername = 'mass mak';
  serverupdate =false ;
  constructor()
  {
setTimeout((  ) =>{
  this.btn1status = true
} , 2000 );
  }
  oncreateserver()
  {
    this.serverupdate = true;
    this.servercreationstatus = 'server is created '+this.servername;
  }
  onservername(event : any)
  {
    this.servername = event.target.value;
  }
  ngOnInit()
  {

  }
}
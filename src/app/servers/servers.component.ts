import { Component , OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
templateUrl:'servers.component.html'

})
export class Serverscomponent implements OnInit {
  btn1status;
  constructor()
  {
setTimeout((  ) =>{
  this.btn1status = true
} , 2000 );
  }
  ngOnInit()
  {

  }
}
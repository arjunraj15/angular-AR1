import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
 templateUrl:'./server.component.html'
})
export class ServerComponents
{
serverId: number = 10;
serverstatus: string = 'offline'
returnstatus()
{
  return this.serverstatus;
}
}  
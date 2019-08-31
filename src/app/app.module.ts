import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServerComponents } from './server/server.component';
import { Serverscomponent } from './servers/servers.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,ServerComponents,Serverscomponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

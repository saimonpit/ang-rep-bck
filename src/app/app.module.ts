import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
    {
      path:'child',
      loadChildren: async () => import("./route-module/route-module.module").then((m)=>m.RouteModuleModule)
    }
  ]) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

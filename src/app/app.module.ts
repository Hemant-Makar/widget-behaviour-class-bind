import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StatusComponent } from './status/status.component';
import { TitleValueComponent } from './title-value/title-value.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StatusComponent,
    TitleValueComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { MessageReceiverComponent } from './components/message-receiver/message-receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageSenderComponent,
    MessageReceiverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

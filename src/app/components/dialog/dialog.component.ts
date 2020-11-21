import { Component, ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  site: string;
  win: any;
}
@Component({
  selector: 'message-window-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements AfterViewInit {
  @ViewChild('inputMessage') public inputMessage: ElementRef;
  @ViewChild('frameDialog') public frameDialog: ElementRef;
  isValueMessage: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngAfterViewInit(): void {
    this.frameDialog.nativeElement.src = this.data.site;
  }

  startHello(): void {
    this.frameDialog.nativeElement.contentWindow.postMessage('Hello world!', '*');
  }

  checkMessageText(): void {
    this.isValueMessage = !!this.inputMessage.nativeElement.value;
  }

  sendMessage(): void {
    const message = this.inputMessage.nativeElement.value;
    this.frameDialog.nativeElement.contentWindow.postMessage(message, '*');
  }
}

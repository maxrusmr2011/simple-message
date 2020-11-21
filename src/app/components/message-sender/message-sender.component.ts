import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.scss']
})
export class MessageSenderComponent implements OnInit {
  @ViewChild('inputSite') public inputSite: ElementRef;
  isValueSite: boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  checkSiteText(): void {
    this.isValueSite = !!this.inputSite.nativeElement.value;
  }

  getTextSite(): void {
    this.dialog.open(DialogComponent, {
      data: {
        site: this.inputSite.nativeElement.value,
        win: window,
      }
    });
  }

}

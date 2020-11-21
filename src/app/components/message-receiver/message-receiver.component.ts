import { Component, OnInit } from '@angular/core';

type messageType = {
  message: string,
  from: string,
};
@Component({
  selector: 'app-message-receiver',
  templateUrl: './message-receiver.component.html',
  styleUrls: ['./message-receiver.component.scss']
})
export class MessageReceiverComponent implements OnInit {
  messageList: messageType[] = [];
  currentSite = location.toString();

  constructor() {
    window.onmessage = (e) => {
      this.messageList.push({
        message: e.data,
        from: e.origin,
      });
    };
  }

  ngOnInit(): void {
  }

}

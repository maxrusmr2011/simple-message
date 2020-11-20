import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-receiver',
  templateUrl: './message-receiver.component.html',
  styleUrls: ['./message-receiver.component.scss']
})
export class MessageReceiverComponent implements OnInit {

  constructor() {
    // document.getElementById('site').innerHTML = location;
    window.onmessage = (e) => {
      console.log(e.origin);
      const message = document.getElementById('messages');
      message.innerHTML += `<li>Message from: <span>${e.source.location.href}</span>:<div>${e.data.message}</div>`;
    }
  }

  ngOnInit(): void {
  }

}

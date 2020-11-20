import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-messager';
  isParent = !(window.parent === window);
  constructor() {
    console.log('parent', window.parent);
    console.log('window', window, window === window.parent);
  }

}

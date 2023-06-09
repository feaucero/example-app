import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styleUrls: ['./parent-output.component.css']
})
export class ParentOutputComponent {
  message = "";

  onMessageSent = (receivedMessage: string) => {
    this.message = receivedMessage;
  }
}

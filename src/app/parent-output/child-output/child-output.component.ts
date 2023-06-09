import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent {
  @Output() messageSent = new EventEmitter<string>();
  message = "Exemplo de output!";

  onClick = () => {
    this.messageSent.emit(this.message);
  }
}

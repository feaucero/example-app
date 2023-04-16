import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  message = '';
  showMessage =  () => {
    //alert("Clicou");
    this.message = 'Clicou!';
  }
}
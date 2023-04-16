import { Component } from '@angular/core';

@Component({
  selector: 'app-builtin-structures',
  templateUrl: './builtin-structures.component.html',
  styleUrls: ['./builtin-structures.component.css']
})
export class BuiltinStructuresComponent {
  showMessage = false;
  option = 2;
  list = [
    {
      "Id": "1",
      "Name": "Quis Associates"
    },
    {
      "Id": "2",
      "Name": "Libero Mauris Inc."
    },
    {
      "Id": "3",
      "Name": "Etiam Imperdiet Foundation"
    },
    {
      "Id": "4",
      "Name": "Nulla Tincidunt Limited"
    },
    {
      "Id": "5",
      "Name": "Neque Venenatis LLC"
    }
  ];

  toggleMessage = () => {
    this.showMessage = !this.showMessage;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-builtin-attributes',
  templateUrl: './builtin-attributes.component.html',
  styleUrls: ['./builtin-attributes.component.css']
})
export class BuiltinAttributesComponent {
  isGreen = false;
  blueBgColor = "#156ba1";
  whiteBgColor = "#e4eaf5";

  ngClassClick = () => {
    this.isGreen = !this.isGreen;
  }
}

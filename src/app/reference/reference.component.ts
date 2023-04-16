import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent {
  @ViewChild('myInput')
  myInput!: ElementRef;

  refValue: string = "";

  onButtonClick() {
    this.refValue = this.myInput.nativeElement.value
  }
}

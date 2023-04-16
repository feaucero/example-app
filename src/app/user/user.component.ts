import { Component } from '@angular/core';
import { ExampleService } from '../example.service';
import { User } from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] = [];

  constructor(private service: ExampleService) {

  }

  ngOnInit() {
    this.service.getUser().subscribe(data => {
      this.users = data.results;
    });
  }

}

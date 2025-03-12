import {Component, inject} from '@angular/core';
import {DefaultComponent} from "../../../templates/default/default.component";
import {UserService} from "../services/user.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-users',
  imports: [
    DefaultComponent,
    AsyncPipe
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  userService = inject(UserService)
  $users = this.userService.$users;

  ngOnInit() {
    this.userService.getAllUsers();
  }
}

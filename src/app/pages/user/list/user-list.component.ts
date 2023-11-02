import { Component } from "@angular/core";
import { User } from "src/app/models/user.model";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent {
  public users: User[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }
}

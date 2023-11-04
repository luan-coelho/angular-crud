import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { UserService } from "../../../services/user.service";
import { Observable } from "rxjs";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  users$ = new Observable<User[]>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.users$ = this.userService.getUsers();
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(_ => this.getAllUsers());
  }
}

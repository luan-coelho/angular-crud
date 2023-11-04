import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.scss"],
})
export class UserCreateComponent implements OnInit {
  form!: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
    });
  }

  onSubmit(): void {
    const user = this.form.value as User;
    this.userService.createUser(user).subscribe(_ => {
      this.router.navigate(["users"]);
    });
  }
}

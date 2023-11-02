import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public api: string = environment.api;

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>(`${this.api}/users`);
  }
}

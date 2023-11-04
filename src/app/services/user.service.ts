import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { User } from "../models/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public api: string = environment.api;

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>(`${this.api}/users`);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.api}/users`, user);
  }

  deleteUser(userId: number) {
    return this.httpClient.delete(`${this.api}/users/${userId}`);
  }
}

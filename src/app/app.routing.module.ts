import { Injectable, NgModule } from "@angular/core";
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from "@angular/router";
import { UserListComponent } from "./pages/user/list/user-list.component";
import { UserCreateComponent } from "./pages/user/create/user-create.component";
import { Title } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "users",
    component: UserListComponent,
    title: "Usuários",
    children: [],
  },
  { path: "users/create", component: UserCreateComponent, title: "Cadastrar novo usuário" },
];

@Injectable({ providedIn: "root" })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

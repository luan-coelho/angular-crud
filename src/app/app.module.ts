import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { UserListComponent } from "./pages/user/list/user-list.component";
import { UserCreateComponent } from "./pages/user/create/user-create.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserListComponent, UserCreateComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

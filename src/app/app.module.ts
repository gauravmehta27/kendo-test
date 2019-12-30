import { MainService } from "./services/main.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { HttpClientModule } from "@angular/common/http";
import { TestingComponent } from "./testing/testing.component";
import { TestingService } from "./services/testing.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, TestingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TestingService, MainService],
  bootstrap: [AppComponent]
})
export class AppModule {}

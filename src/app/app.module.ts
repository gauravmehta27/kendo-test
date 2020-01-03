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
import { LayoutModule } from "@progress/kendo-angular-layout";
import { PanelBarModule } from "@progress/kendo-angular-layout";
import { TooltipModule } from '@progress/kendo-angular-tooltip';


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
    ReactiveFormsModule,
    LayoutModule,
    PanelBarModule,
    TooltipModule
  ],
  providers: [TestingService, MainService],
  bootstrap: [AppComponent]
})
export class AppModule {}

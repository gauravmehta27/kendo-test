// import of angular's default libraries
import { Injectable } from "@angular/core";

// import of other dependencies
import { MainService } from "./main.service";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TestingService {
  simpleVar = "Simple Variable";
  constructor(private mainService: MainService) {
    if (sessionStorage.dummy) {
      this.changeTest(sessionStorage.dummy);
    }
  }
  private testVar = new BehaviorSubject("");
  testVar$ = this.testVar.asObservable();
  getDropdown() {
    return this.mainService.getFileResp("/assets/data/data.json");
  }

  //function to get data from server via get call
  getData() {
    return this.mainService.getAll("endpoint-url");
  }

  //function to create data via post call
  posttData(data) {
    return this.mainService.create("endpoint-url", data);
  }

  //function to update via patch call
  updateData(data) {
    return this.mainService.patch("endpoint-url", data);
  }

  changeTest(val) {
    this.testVar.next(val);
  }
}

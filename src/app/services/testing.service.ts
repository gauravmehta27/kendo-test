// import of angular's default libraries
import { Injectable } from "@angular/core";

// import of other dependencies
import { MainService } from "./main.service";

@Injectable()
export class TestingService {
  constructor(private mainService: MainService) {}

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
}

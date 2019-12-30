import { Component, OnInit } from "@angular/core";
import { TestingService } from "../services/testing.service";
import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-testing",
  templateUrl: "./testing.component.html",
  styleUrls: ["./testing.component.css"]
})
export class TestingComponent implements OnInit {
  data: any;
  form: FormGroup;
  showErrors: boolean;

  constructor(
    private testingService: TestingService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      dropdown1: ["", Validators.compose([Validators.required])],
      dropdown2: ["", [Validators.required]],
      text: ["", [Validators.required]]
    });
    this.data = [];
    this.testingService.getDropdown().subscribe((res: any) => {
      this.data = res.dropdown1;
    });
    this.showErrors = false;
    this.testingService.getData().subscribe((res: any) => {
      this.form.patchValue({
        dropdown1: "",
        dropdown2: "",
        text: ""
      });
    });
  }

  submit(data) {
    if (this.form.invalid) {
      this.showErrors = true;
      return;
    }
    this.showErrors = false;
    console.log(data);
  }
}

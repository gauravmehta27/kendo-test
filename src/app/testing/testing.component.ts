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
  private baseImageUrl: string =
    "https://demos.telerik.com/kendo-ui/content/web/panelbar/";

  data: any;
  form: FormGroup;
  showErrors: boolean;
  testVariable: string;
  simpleVariable: any;
  isRed: boolean;

  private imageUrl(imageName: string): string {
    return this.baseImageUrl + imageName + ".jpg";
  }
  constructor(
    private testingService: TestingService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.isRed = false;
    this.testingService.testVar$.subscribe(res => {
      this.testVariable = res;
    });
    this.simpleVariable = this.testingService.simpleVar;
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

  isTextClicked() {
    this.isRed = true;
  }
}

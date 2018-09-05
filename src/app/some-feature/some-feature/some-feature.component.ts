import { Component } from "@angular/core";
import { AlertService } from "../../shared/alert/alert.service";
import { AlertModel } from "../../shared/alert/alert.model";
import { AlertType } from "../../shared/alert/alert-type.model";

@Component({
  selector: "app-some-feature",
  templateUrl: "./some-feature.component.html",
  styleUrls: ["./some-feature.component.css"]
})
export class SomeFeatureComponent {
  constructor(private _alertService: AlertService) {}

  public generateErrorAlert(content: string) {
    this._alertService.newAlert(
      new AlertModel(AlertType.ERROR, new Date(), content)
    );
  }

  public generateWarningAlert(content: string) {
    this._alertService.newAlert(
      new AlertModel(AlertType.WARNING, new Date(), content)
    );
  }

  public generateInfoAlert(content: string) {
    this._alertService.newAlert(
      new AlertModel(AlertType.INFO, new Date(), content)
    );
  }

  public generateSuccessAlert(content: string) {
    this._alertService.newAlert(
      new AlertModel(AlertType.SUCCESS, new Date(), content)
    );
  }
}

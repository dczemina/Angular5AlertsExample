import { Component } from "@angular/core";
import { AlertModel } from "../../shared/alert/alert.model";
import { AlertType } from "../../shared/alert/alert-type.model";
import { AlertService } from "../../shared/alert/alert.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent {
  public alerts: Array<AlertModel> = [];

  constructor(private _alertService: AlertService) {
    this._alertService.getAllAlerts().subscribe(alerts => {
      this.alerts = alerts;
    });
  }
}

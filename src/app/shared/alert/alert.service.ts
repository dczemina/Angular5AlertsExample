import { Injectable } from "@angular/core";
import { AlertModel } from "./alert.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AlertService {
  private _alerts: BehaviorSubject<Array<AlertModel>> = new BehaviorSubject<
    Array<AlertModel>
  >([]);
  private _alert: BehaviorSubject<AlertModel> = new BehaviorSubject<AlertModel>(
    null
  );

  constructor() {
    console.log("AlertService.constructor()");
  }

  // Generate a new alert
  public newAlert(alert: AlertModel) {
    console.log("newAlert()");
    const alerts = [...this._alerts.getValue(), alert]; // Immutability
    this._alert.next(alert);
    this._alerts.next(alerts);
  }

  // Allows subscription to get latest alert
  public getLatestAlert(): Observable<AlertModel> {
    console.log("getLatestAlert()");
    return this._alert.asObservable();
  }

  // Allows subscription to get all alerts
  public getAllAlerts(): Observable<Array<AlertModel>> {
    console.log("getAllAlerts()");
    return this._alerts.asObservable();
  }
}

import { AlertType } from "./alert-type.model";

export class AlertModel {
  constructor(
    public alertType: AlertType,
    public alertDate: Date,
    public alertContents: string
  ) {}
}

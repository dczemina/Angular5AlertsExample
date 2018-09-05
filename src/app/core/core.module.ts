import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";

import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
  declarations: [NavigationComponent],
  imports: [SharedModule],
  exports: [NavigationComponent]
})
export class CoreModule {}

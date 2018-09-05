import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";

import { SomeFeatureComponent } from "./some-feature/some-feature.component";

@NgModule({
  declarations: [SomeFeatureComponent],
  imports: [SharedModule],
  exports: [SomeFeatureComponent]
})
export class SomeFeatureModule {}

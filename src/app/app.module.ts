import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { SomeFeatureModule } from "./some-feature/some-feature.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule.forRoot(),
    SomeFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

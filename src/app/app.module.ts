import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { NG_ENTITY_SERVICE_CONFIG } from "@datorama/akita-ng-entity-service";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Interceptor } from "./interceptor";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  providers: [
    [{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: "https://jsonplaceholder.typicode.com"
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

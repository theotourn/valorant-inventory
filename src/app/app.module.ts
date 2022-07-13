import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SkinsComponent } from './comps/skins/skins.component';
import { valorantapiService } from './services/valorantapi.service';

@NgModule({
  declarations: [
    AppComponent,
    SkinsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, valorantapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

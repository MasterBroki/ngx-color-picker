import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ColorPickerModule,
        MatCardModule
    ]
})
export class AppModule {}

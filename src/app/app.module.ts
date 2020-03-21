import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';


@NgModule({
  declarations: [
    AppComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

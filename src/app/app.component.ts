import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'camera';
  captures: Array<any>;
  public webcamImage: WebcamImage = null;

  public constructor() {
    this.captures = [];
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;


    this.captures.push(this.webcamImage.imageAsDataUrl)


  }
}

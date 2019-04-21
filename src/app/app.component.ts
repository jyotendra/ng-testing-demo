import { Component } from '@angular/core';
import EncrypterService from "../shared/services/encrypter/encrypter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public originalMessage = "Testing encrypter service";
  public encryptedMessage: string;
  public decryptedMessage: string;

  /**
   *
   */
  constructor(private encrypterService: EncrypterService) {
    this.testEncrypter();
  }

  public testEncrypter() {
    this.encryptedMessage = this.encrypterService.encryptMessage(this.originalMessage);
    this.decryptedMessage = this.encrypterService.decryptMessage(this.encryptedMessage);
  }

  title = 'ng-signalr';
}
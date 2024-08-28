import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { NavController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  goToCurrentWeather() {
    this.navCtrl.navigateForward('/weather-current');
  }

  goToSearchWeather() {
    this.navCtrl.navigateForward('/weather');
  }

  goToAbout() {
    this.navCtrl.navigateForward('/about');
  }
}


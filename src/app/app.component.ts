import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, IonIcon, IonLabel, IonTabButton, IonTabBar, IonApp, IonRouterOutlet],
})
export class AppComponent {

  constructor() {}
}

import { Routes } from '@angular/router';
import { WeatherPage } from './Pages/home/weather/weather.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./Pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'weather',
    component: WeatherPage
  },
  {
    path: 'settings',
    loadComponent: () => import('./Pages/home/settings/settings.page').then( m => m.SettingsPage)
  },
];

import { Routes } from '@angular/router';
import { WeatherPage } from './Pages/home/weather/weather.page';
import { WeatherCurrentPage} from './Pages/home/weather-current/weather-current.page'

// sets up routing used in application
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
    path: 'weather-current',
    component: WeatherCurrentPage
  },
  {
    path: 'about',
    loadComponent: () => import('./Pages/home/about/about.page').then( m => m.AboutPage)
  },


];


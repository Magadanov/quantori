import { Routes } from '@angular/router';
import { AboutComponent } from './main/pages/about/about.component';
import { HomeComponent } from './main/pages/home/home.component';
import { ContactComponent } from './main/pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'contact', component: ContactComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
];

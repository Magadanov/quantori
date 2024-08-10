import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import authActiveGuard from './auth/guards/auth-active.guard';
import mainActiveGuard from './main/guards/main-active.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [authActiveGuard],
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canActivate: [mainActiveGuard],
  },
  { path: '**', component: NotFoundComponent },
];

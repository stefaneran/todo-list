import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Faq } from './faq/faq';
import { Settings } from './settings/settings';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'faq', component: Faq },
  { path: 'settings', component: Settings },
  { path: '**', redirectTo: '' },
];

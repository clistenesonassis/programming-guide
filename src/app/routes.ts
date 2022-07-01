import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'home',
    loadChildren:  async () => (await import('./feature/home/home.module')).HomeModule,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

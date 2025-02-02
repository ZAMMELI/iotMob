
//app-routing.modules.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomePageModule } from './home/home.module';
import { PersonAddPageModule } from './person-add/person-add.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'person-add',
    loadChildren: () => import('./person-add/person-add.module').then( m => m.PersonAddPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'energy',
    loadChildren: () => import('./energy/energy.module').then( m => m.EnergyPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'air',
    loadChildren: () => import('./air/air.module').then( m => m.AirPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'safe',
    loadChildren: () => import('./safe/safe.module').then( m => m.SafePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule), canActivate: [AuthGuard]
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

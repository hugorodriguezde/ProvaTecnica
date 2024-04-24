import { Routes } from '@angular/router';
import { PhotgraphersListComponent } from './pages/photgraphers-list/photgraphers-list.component';

export const routes: Routes = [
  {path:'home', component: PhotgraphersListComponent},
  {path:'photographers/:id', loadComponent() {
    return import('./pages/photographers-detail/photographers-detail.component').then(m => m.PhotographersDetailComponent);
  },},

  {path:'**', redirectTo: 'home'},
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { C1Component } from './component/chart/c1/c1.component';
import { C2Component } from './component/chart/c2/c2.component';
import { C3Component } from './component/chart/c3/c3.component';
import { C4Component } from './component/chart/c4/c4.component';
import { C5Component } from './component/chart/c5/c5.component';

export const routes: Routes = [
  {path:'', component: HomeComponent} ,
  {path:'c1', component: C1Component},
  {path:'c2', component: C2Component},
  {path:'c3', component: C3Component},
  {path:'c4', component: C4Component},
  {path:'c5', component: C5Component}

];

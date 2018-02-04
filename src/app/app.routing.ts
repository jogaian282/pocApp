import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { RequestComponent } from './request/request.component';
import { ResponseComponent } from './response/response.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path:'',redirectTo:'auth',pathMatch:'full' },
  { path:'auth',component: AuthComponent},
  {
    path: '' , component : LayoutComponent ,
    children:[
      { path : '',redirectTo:'request',pathMatch:'full'},
      { path : 'request',component:RequestComponent },
      { path : 'response',component:ResponseComponent },
      { path : 'dashboard',component:DashboardComponent }
    ]
  },
  { path: '**',redirectTo:'auth'}
];

export const AppRouting = RouterModule.forRoot(routes,{useHash : true});

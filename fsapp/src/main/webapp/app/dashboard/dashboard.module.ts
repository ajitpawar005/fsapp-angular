import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const dashboardRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]);

@NgModule({
  imports: [
    dashboardRouting,
  ],
  declarations: [
    DashboardComponent
  ],
  providers: []
})
export class DashboardModule {}

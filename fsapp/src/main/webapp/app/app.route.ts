import { Routes } from '@angular/router';

// import { NavbarComponent } from './layouts';
import { LoginComponent } from './account';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoute: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent }
];

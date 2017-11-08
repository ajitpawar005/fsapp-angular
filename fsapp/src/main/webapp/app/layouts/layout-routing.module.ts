import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoute } from '../app.route';
import { LoginComponent } from '../account/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { errorRoute } from './';

const LAYOUT_ROUTES = [
    appRoute,
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: LoginComponent },
            
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule { }

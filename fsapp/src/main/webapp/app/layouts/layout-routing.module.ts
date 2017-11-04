import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoute } from '../app.route';
import { LoginComponent } from '../account/login/login.component';
import { errorRoute } from './';

const LAYOUT_ROUTES = [
    appRoute,
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot([{path: '',component: LoginComponent}])
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule {}

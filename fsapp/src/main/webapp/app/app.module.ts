import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { Ng2Webstorage } from 'ng2-webstorage';
import { appRoute } from './app.route';
import { FsappSharedModule, UserRouteAccessService } from './shared';
import { FsappHomeModule } from './home/home.module';
import { FsappProjectModule } from  './project/project.module'
import { FsappAdminModule } from './admin/admin.module';
import { FsappAccountModule } from './account/account.module';
import { FsappEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    ErrorComponent
} from './layouts';
import {LoginComponent} from './account';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        //Ng2Webstorage.forRoot(appRoute),
        RouterModule.forRoot(appRoute),
        FsappSharedModule,
        FsappHomeModule,
        FsappProjectModule,
        FsappAdminModule,
        FsappAccountModule,
        FsappEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        LoginComponent,
        DashboardComponent,
        ErrorComponent,
        
    ],
    providers: [
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class FsappAppModule {}

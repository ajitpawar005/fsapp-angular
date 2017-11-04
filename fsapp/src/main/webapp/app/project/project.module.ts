import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewprojectComponent, projectState } from './';

@NgModule({
    imports: [
        RouterModule.forRoot(projectState)
    ],
    declarations: [
        ViewprojectComponent,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FsappProjectModule {}

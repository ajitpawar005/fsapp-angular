import { Routes } from '@angular/router';
import { viewprojectRoute } from './';

const PROJECT_ROUTES  = [
    viewprojectRoute
];

export const projectState: Routes = [
    { path : '', children: PROJECT_ROUTES }
]  

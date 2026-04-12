import { Routes } from '@angular/router';
import { Status } from './status/status'
import { Maintenance } from './maintenance/maintenance';

export const routes: Routes = [
    { path: '', redirectTo: '/status', pathMatch: 'full' },
    {
        path: 'status',
        component: Status,
    },
    {
        path: 'maintenance',
        component: Maintenance,
    },
];

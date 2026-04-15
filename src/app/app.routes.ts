import { Routes } from '@angular/router';
import { Status } from './status/status'
import { Maintenance } from './maintenance/maintenance';
import { Incidents } from './incidents/incidents';

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
    {
        path: 'incidents',
        component: Incidents,
    }
];

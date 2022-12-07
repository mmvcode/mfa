import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'video',
    loadChildren: () => import('video/Module').then((m) => m.RemoteEntryModule),
  },
];

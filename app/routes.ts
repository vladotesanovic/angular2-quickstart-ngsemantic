import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/reviews/reviews.component';
import { AddReviewComponent } from "./components/reviews/add/add.component";
import { StatisticReviewComponent } from "./components/reviews/statistic/statistic.component";
import { AuthGuard } from "./services/authguard";
import { EventsComponent } from "./components/events/events.component";

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {   path: 'reviews',
        component: ReviewComponent,
        children: [
            { path: '', component: StatisticReviewComponent },
            { path: 'add', component: AddReviewComponent }
        ]
    },
    { path: 'events', component: EventsComponent, canActivate: [AuthGuard] }
];

export const APP_ROUTER_PROVIDERS: Array<{}> = [
    AuthGuard,
];

export const routing = RouterModule.forRoot(routes, { useHash: true });

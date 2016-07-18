import { provideRouter, RouterConfig } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, Type } from "@angular/common";

import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/reviews/reviews.component';
import { EventsComponent } from './components/events/events.component';
import { AuthGuard } from "./services/authguard";
import { AddReviewComponent } from "./components/reviews/add/add.component";
import { StatisticReviewComponent } from "./components/reviews/statistic/statistic.component";

const routes: RouterConfig = [
    { path: '', component: <Type>HomeComponent },
    {   path: 'reviews',
        component: <Type>ReviewComponent,
        children: [
            { path: '', component: <Type>StatisticReviewComponent },
            { path: 'add', component: <Type>AddReviewComponent }
        ]
    },
    { path: 'events', component: <Type>EventsComponent, canActivate: [AuthGuard] }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];

import { provideRouter, RouterConfig } from '@angular/router';
import { LocationStrategy, HashLocationStrategy,  } from "@angular/common";

import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/reviews/reviews.component';
import { EventsComponent } from './components/events/events.component';
import { AuthGuard } from "./services/authguard";
import { AddReviewComponent } from "./components/reviews/add/add.component";
import { StatisticReviewComponent } from "./components/reviews/statistic/statistic.component";

const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    {   path: 'reviews',
        component: ReviewComponent,
        children: [
            { path: '', component: StatisticReviewComponent },
            { path: 'add', component: AddReviewComponent }
        ]
    },
    { path: 'events', component: EventsComponent, canActivate: [AuthGuard] }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];

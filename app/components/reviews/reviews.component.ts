import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    selector: 'my-reviews',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: `app/components/reviews/reviews.component.html`
})
export class ReviewComponent {}
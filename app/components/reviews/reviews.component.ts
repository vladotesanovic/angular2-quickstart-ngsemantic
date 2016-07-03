import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
    selector: 'my-reviews',
    directives: [SEMANTIC_DIRECTIVES, ROUTER_DIRECTIVES],
    templateUrl: `app/components/reviews/reviews.component.html`
})
export class ReviewComponent {}
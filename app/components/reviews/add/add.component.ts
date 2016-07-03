import { Component } from '@angular/core';
import { SEMANTIC_COMPONENTS } from "ng-semantic";

@Component({
    directives: [SEMANTIC_COMPONENTS],
    selector: 'my-reviews-add',
    templateUrl: `app/components/reviews/add/add.component.html`
})
export class AddReviewComponent {}
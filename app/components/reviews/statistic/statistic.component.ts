import { Component } from '@angular/core';
import { SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
    directives: [SEMANTIC_DIRECTIVES],
    selector: 'my-reviews-statistic',
    templateUrl: `app/components/reviews/statistic/statistic.component.html`
})
export class StatisticReviewComponent {}
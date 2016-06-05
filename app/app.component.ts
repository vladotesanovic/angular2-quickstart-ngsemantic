import { Component } from '@angular/core';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
    selector: 'my-app',
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    templateUrl: `app/app.component.html`
})
export class AppComponent {
    constructor() {}
}
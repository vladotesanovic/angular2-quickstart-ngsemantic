import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import 'jquery';
import 'semantic';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: `app/components/app.component.html`
})
export class AppComponent {
    visible: boolean = false;

    setVisibility(data: boolean) { this.visible = data; }
}
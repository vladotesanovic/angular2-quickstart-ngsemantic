import { Component } from '@angular/core';

import 'jquery';
import 'semantic';

@Component({
    selector: 'my-app',
    templateUrl: `app/components/app.component.html`
})
export class AppComponent {
    visible: boolean = false;

    setVisibility(data: boolean) { this.visible = data; }
}
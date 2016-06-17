import { Component, Type } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SUIModalComponent } from "SUI-Angular2-Modal/modal";

@Component({
    selector: 'my-app',
    directives: [<Type>SUIModalComponent, ROUTER_DIRECTIVES],
    templateUrl: `app/components/app.component.html`
})
export class AppComponent {
    visible: boolean = false;

    setVisibility(data: boolean) { this.visible = data; }
}
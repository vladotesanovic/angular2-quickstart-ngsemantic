import { Component, Type } from '@angular/core';
import { SUIModalComponent } from "SUI-Angular2-Modal/modal";

@Component({
    selector: 'my-home',
    directives: [<Type>SUIModalComponent],
    templateUrl: `app/components/home/home.component.html`
})
export class HomeComponent {
    visible: boolean = false;

    setVisibility(data: boolean) { this.visible = data; }
}
import { __decorate } from "tslib";
import { Component } from '@angular/core';
let VotetakerComponent = class VotetakerComponent {
    constructor() {
        this.agreed = 0;
        this.disagreed = 0;
        this.voters = ['Narco', 'Celeritas', 'Bombasto'];
    }
    onVoted(agreed) {
        if (agreed) {
            this.agreed++;
        }
        else {
            this.disagreed++;
        }
    }
    ngOnInit() {
    }
};
VotetakerComponent = __decorate([
    Component({
        selector: 'app-votetaker',
        templateUrl: './votetaker.component.html',
        styleUrls: ['./votetaker.component.css']
    })
], VotetakerComponent);
export { VotetakerComponent };
//# sourceMappingURL=votetaker.component.js.map
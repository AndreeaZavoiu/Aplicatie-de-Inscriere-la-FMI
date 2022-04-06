import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let AstronautComponent = class AstronautComponent {
    constructor(missionService) {
        this.missionService = missionService;
        this.astronaut = '';
        this.mission = '<no mission announced>';
        this.confirmed = false;
        this.announced = false;
        this.subscription = missionService.missionAnnounced$.subscribe(mission => {
            this.mission = mission;
            this.announced = true;
            this.confirmed = false;
        });
    }
    confirm() {
        this.confirmed = true;
        this.missionService.confirmMission(this.astronaut);
    }
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
};
__decorate([
    Input()
], AstronautComponent.prototype, "astronaut", void 0);
AstronautComponent = __decorate([
    Component({
        selector: 'app-astronaut',
        templateUrl: './astronaut.component.html',
        styleUrls: ['./astronaut.component.css']
    })
], AstronautComponent);
export { AstronautComponent };
//# sourceMappingURL=astronaut.component.js.map
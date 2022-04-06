import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let HeroChildComponent = class HeroChildComponent {
    constructor() {
        this.masterName = '';
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], HeroChildComponent.prototype, "hero", void 0);
__decorate([
    Input('master')
], HeroChildComponent.prototype, "masterName", void 0);
HeroChildComponent = __decorate([
    Component({
        selector: 'app-hero-child',
        templateUrl: './hero-child.component.html',
        styleUrls: ['./hero-child.component.css']
    })
], HeroChildComponent);
export { HeroChildComponent };
//# sourceMappingURL=hero-child.component.js.map
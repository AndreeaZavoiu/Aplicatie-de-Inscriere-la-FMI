import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { HEROES } from '../mock-data/mock-heroes';
let HeroParentComponent = class HeroParentComponent {
    constructor() {
        this.heroes = HEROES;
        this.master = 'Master';
    }
    ngOnInit() {
    }
};
HeroParentComponent = __decorate([
    Component({
        selector: 'app-hero-parent',
        templateUrl: './hero-parent.component.html',
        styleUrls: ['./hero-parent.component.css']
    })
], HeroParentComponent);
export { HeroParentComponent };
//# sourceMappingURL=hero-parent.component.js.map
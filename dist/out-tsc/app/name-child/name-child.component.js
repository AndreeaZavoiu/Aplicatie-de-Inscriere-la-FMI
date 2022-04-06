import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NameChildComponent = class NameChildComponent {
    constructor() {
        this._name = '';
    }
    get name() { return this._name; }
    set name(name) {
        this._name = (name && name.trim()) || '<no name set>';
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], NameChildComponent.prototype, "name", null);
NameChildComponent = __decorate([
    Component({
        selector: 'app-name-child',
        templateUrl: './name-child.component.html',
        styleUrls: ['./name-child.component.css']
    })
], NameChildComponent);
export { NameChildComponent };
//# sourceMappingURL=name-child.component.js.map
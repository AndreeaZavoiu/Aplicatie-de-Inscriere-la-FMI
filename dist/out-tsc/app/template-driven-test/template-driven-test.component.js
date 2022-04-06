import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TemplateDrivenTestComponent = class TemplateDrivenTestComponent {
    constructor() { }
    ngOnInit() {
        this.curs = {
            id: 1,
            nume: '',
            zi: 1,
            an: 1
        };
    }
};
TemplateDrivenTestComponent = __decorate([
    Component({
        selector: 'app-template-driven-test',
        templateUrl: './template-driven-test.component.html',
        styleUrls: ['./template-driven-test.component.css']
    })
], TemplateDrivenTestComponent);
export { TemplateDrivenTestComponent };
//# sourceMappingURL=template-driven-test.component.js.map
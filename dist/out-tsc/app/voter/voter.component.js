import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let VoterComponent = class VoterComponent {
    constructor() {
        this.name = '';
        this.voted = new EventEmitter();
        this.didVote = false;
    }
    vote(agreed) {
        this.voted.emit(agreed);
        this.didVote = true;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], VoterComponent.prototype, "name", void 0);
__decorate([
    Output()
], VoterComponent.prototype, "voted", void 0);
VoterComponent = __decorate([
    Component({
        selector: 'app-voter',
        templateUrl: './voter.component.html',
        styleUrls: ['./voter.component.css']
    })
], VoterComponent);
export { VoterComponent };
//# sourceMappingURL=voter.component.js.map
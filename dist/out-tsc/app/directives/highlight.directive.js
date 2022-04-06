import { __decorate } from "tslib";
import { Directive, HostListener } from '@angular/core';
let HighlightDirective = class HighlightDirective {
    constructor(el) {
        this.el = el;
    }
    onMouseEnter() {
        this.highlight('yellow');
    }
    onMouseLeave() {
        this.highlight('');
    }
    highlight(color) {
        this.el.nativeElement.style.backgroundColor = color;
    }
};
__decorate([
    HostListener('mouseenter')
], HighlightDirective.prototype, "onMouseEnter", null);
__decorate([
    HostListener('mouseleave')
], HighlightDirective.prototype, "onMouseLeave", null);
HighlightDirective = __decorate([
    Directive({
        selector: '[appHighlight]'
    })
], HighlightDirective);
export { HighlightDirective };
//# sourceMappingURL=highlight.directive.js.map
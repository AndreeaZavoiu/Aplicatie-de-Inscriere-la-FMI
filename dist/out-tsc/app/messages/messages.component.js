import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MessagesComponent = class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    } // trb sa fie public ca sa fie folosit de .html
    ngOnInit() {
    }
};
MessagesComponent = __decorate([
    Component({
        selector: 'app-messages',
        templateUrl: './messages.component.html',
        styleUrls: ['./messages.component.css']
    })
], MessagesComponent);
export { MessagesComponent };
//# sourceMappingURL=messages.component.js.map
import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Register } from '../models/register';
let RegisterComponent = class RegisterComponent {
    constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.registrationForm = this.fb.group({
            email: ['', Validators.required],
            password: ['']
        });
    }
    ngOnInit() {
    }
    onLogin() {
        var newUser = new Register(this.registrationForm.value);
        this.authService.register(newUser).subscribe();
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map
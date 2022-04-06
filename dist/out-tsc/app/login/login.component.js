import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Login } from '../models/login';
let LoginComponent = class LoginComponent {
    constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.user = {
            email: 'test@test.com',
            password: ''
        };
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['']
        });
        this.error = false;
    }
    ngOnInit() { }
    onLogin() {
        var user = new Login(this.loginForm.value);
        this.authService.login(user).subscribe();
    }
    doLogin() {
        this.error = false;
        if (this.user.email && this.user.password) { // sunt requiered
            if (this.validateEmail(this.user.email)) {
                console.log("login works");
            }
            else { // daca emailul nu e valid, afisam un mesaj
                this.error = "Email is invalid";
            }
        }
    }
    validateEmail(email) {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    ;
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map
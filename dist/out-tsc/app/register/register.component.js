import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Register } from '../models/register';
let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            Email: ['', [Validators.email, Validators.required]],
            Password: ['', [Validators.required, Validators.minLength(5)]],
            Nume: ['', [Validators.required]],
            Prenume: ['', [Validators.required]],
            Adresa: [''],
            Localitate: [''],
            Tara: [''],
            CodPostal: ['']
        });
    }
    onRegister() {
        var newUser = new Register(this.registrationForm.value);
        this.authService.register(newUser).subscribe();
    }
    toggleDarkTheme() {
        document.body.classList.toggle('dark-theme');
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
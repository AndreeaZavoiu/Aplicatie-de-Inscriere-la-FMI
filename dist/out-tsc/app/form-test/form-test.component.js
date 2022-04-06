import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { forbiddenNameValidator } from '../directives/directiveForbidden';
let FormTestComponent = class FormTestComponent {
    constructor(fb) {
        this.fb = fb;
        this.name = new FormControl('');
        this.cursForm = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(4) //, forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
            ]),
            alterEgo: new FormControl(''),
            power: new FormControl('', Validators.required)
        });
        this.profileForm = this.fb.group({
            firstName: ['', Validators.required, Validators.minLength(4)],
            lastName: [''],
            address: this.fb.group({
                street: [''],
                city: [''],
                state: [''],
                zip: ['']
            }),
            aliases: this.fb.array([
                this.fb.control('')
            ])
        });
    }
    ngOnInit() {
    }
    get aliases() {
        return this.profileForm.get('aliases');
    }
    addAlias() {
        this.aliases.push(this.fb.control(''));
    }
    updateName() {
        this.name.setValue('Nancy');
    }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
    }
    updateProfile() {
        this.profileForm.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });
    }
};
FormTestComponent = __decorate([
    Component({
        selector: 'app-form-test',
        templateUrl: './form-test.component.html',
        styleUrls: ['./form-test.component.css']
    })
], FormTestComponent);
export { FormTestComponent };
//# sourceMappingURL=form-test.component.js.map
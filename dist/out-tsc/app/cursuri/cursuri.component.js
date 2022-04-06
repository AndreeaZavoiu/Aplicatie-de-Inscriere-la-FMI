import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CURSURI } from '../mock-data/mock-courses';
import { take } from 'rxjs';
let CursuriComponent = class CursuriComponent {
    constructor(cursService, messageService, location) {
        this.cursService = cursService;
        this.messageService = messageService;
        this.location = location;
        this.cursuri = CURSURI;
    }
    ngOnInit() {
        //this.getCourses();
    }
    getCourses() {
        this.cursService.getCourses().pipe(take(1)).subscribe(cursuri => this.cursuri = cursuri);
    }
    add(nume) {
        nume = nume.trim();
        if (!nume) {
            return;
        }
        this.cursService.addCourse({ nume })
            .subscribe(cursuri => {
            this.cursuri = cursuri;
        });
    }
    delete(curs) {
        this.cursuri = this.cursuri.filter(h => h !== curs);
        // this.cursService.deleteCourse(curs.id).subscribe(cursuri => this.cursuri = cursuri);
    }
    goBack() {
        this.location.back();
    }
};
CursuriComponent = __decorate([
    Component({
        selector: 'app-cursuri',
        templateUrl: './cursuri.component.html',
        styleUrls: ['./cursuri.component.css']
    })
], CursuriComponent);
export { CursuriComponent };
//# sourceMappingURL=cursuri.component.js.map
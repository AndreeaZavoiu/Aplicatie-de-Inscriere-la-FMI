import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CourseDetailComponent = class CourseDetailComponent {
    constructor(route, cursService, location) {
        this.route = route;
        this.cursService = cursService;
        this.location = location;
    }
    ngOnInit() {
        this.getCourse();
    }
    getCourse() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.cursService.getCourse(id)
            .subscribe(curs => this.curs = curs);
    }
    goBack() {
        this.location.back();
    }
    save() {
        if (this.curs) {
            this.cursService.updateCourse(this.curs)
                .subscribe(() => this.goBack());
        }
    }
};
CourseDetailComponent = __decorate([
    Component({
        selector: 'app-course-detail',
        templateUrl: './course-detail.component.html',
        styleUrls: ['./course-detail.component.css']
    })
], CourseDetailComponent);
export { CourseDetailComponent };
//# sourceMappingURL=course-detail.component.js.map
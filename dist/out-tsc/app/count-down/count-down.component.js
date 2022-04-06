import { __decorate } from "tslib";
// source: https://stackblitz.com/edit/angular-3fdr3k?file=src%2Fapp%2Fapp.module.ts
import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { Pipe } from "@angular/core";
let CountDownComponent = class CountDownComponent {
    constructor() {
        this.counter = 1800;
        this.tick = 1000;
    }
    ngOnInit() {
        this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
    }
    ngOnDestroy() {
        this.countDown.unsubscribe();
    }
};
CountDownComponent = __decorate([
    Component({
        selector: 'app-count-down',
        templateUrl: './count-down.component.html',
        styleUrls: ['./count-down.component.css']
    })
], CountDownComponent);
export { CountDownComponent };
let FormatTimePipe = class FormatTimePipe {
    transform(value) {
        const minutes = Math.floor(value / 60);
        return (("00" + minutes).slice(-2) +
            ":" +
            ("00" + Math.floor(value - minutes * 60)).slice(-2));
    }
};
FormatTimePipe = __decorate([
    Pipe({
        name: "formatTime"
    })
], FormatTimePipe);
export { FormatTimePipe };
//     private subscription: Subscription = new Subscription;
//     public dateNow = new Date();
//     // public dDay = new Date('Jan 01 2021 00:00:00');
//     public toDate = new Date().getHours() + 1;
//     milliSecondsInASecond = 1000;
//     hoursInADay = 24;
//     minutesInAnHour = 60;
//     SecondsInAMinute  = 60;
//     public timeDifference = 15;
//     public secondsToDday = 0;
//     public minutesToDday = 15;
//     // public hoursToDday = 0;
//     // public daysToDday = 0;
//     private getTimeDifference () {
//         this.timeDifference = this.toDate - this.dateNow.getHours();
//         this.allocateTimeUnits(this.timeDifference);
//     }
//   private allocateTimeUnits (timeDifference: number) {
//         this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
//         this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
//         // this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
//         // this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
//   }
//     ngOnInit() {
//        this.subscription = interval(1000)
//            .subscribe(x => { this.getTimeDifference(); });
//     }
//    ngOnDestroy() {
//       this.subscription.unsubscribe();
//    }
// }
//# sourceMappingURL=count-down.component.js.map
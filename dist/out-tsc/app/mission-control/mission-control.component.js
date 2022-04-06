import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MissionControlComponent = class MissionControlComponent {
    constructor(missionService) {
        this.missionService = missionService;
        this.astronauts = ['Lovell', 'Swigert', 'Haise'];
        this.history = [];
        this.missions = ['Fly to the moon!',
            'Fly to mars!',
            'Fly to Vegas!'];
        this.nextMission = 0;
    }
    ngOnInit() {
        this.missionService.missionConfirmed$.subscribe(astronaut => {
            this.history.push(`${astronaut} confirmed the mission`);
        });
    }
    announce() {
        const mission = this.missions[this.nextMission++];
        this.missionService.announceMission(mission);
        this.history.push(`Mission "${mission}" announced`);
        if (this.nextMission >= this.missions.length) {
            this.nextMission = 0;
        }
    }
};
MissionControlComponent = __decorate([
    Component({
        selector: 'app-mission-control',
        templateUrl: './mission-control.component.html',
        styleUrls: ['./mission-control.component.css']
    })
], MissionControlComponent);
export { MissionControlComponent };
//# sourceMappingURL=mission-control.component.js.map
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let MissionService = class MissionService {
    constructor() {
        // Observable string sources
        this.missionAnnouncedSource = new Subject();
        this.missionConfirmedSource = new Subject();
        // Observable string streams
        this.missionAnnounced$ = this.missionAnnouncedSource.asObservable();
        this.missionConfirmed$ = this.missionConfirmedSource.asObservable();
    }
    // Service message commands
    announceMission(mission) {
        this.missionAnnouncedSource.next(mission);
    }
    confirmMission(astronaut) {
        this.missionConfirmedSource.next(astronaut);
    }
};
MissionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MissionService);
export { MissionService };
//# sourceMappingURL=mission.service.js.map
import { TestBed } from '@angular/core/testing';
import { MissionService } from './mission.service';
describe('MissionService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MissionService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=mission.service.spec.js.map
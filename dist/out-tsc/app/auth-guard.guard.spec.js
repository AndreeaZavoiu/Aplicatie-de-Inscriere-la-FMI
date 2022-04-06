import { TestBed } from '@angular/core/testing';
import { AuthGuardGuard } from './auth-guard.guard';
describe('AuthGuardGuard', () => {
    let guard;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(AuthGuardGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
//# sourceMappingURL=auth-guard.guard.spec.js.map
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuardGuard = class AuthGuardGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        debugger;
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    }
};
AuthGuardGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuardGuard);
export { AuthGuardGuard };
//# sourceMappingURL=auth-guard.guard.js.map
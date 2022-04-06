import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
let AuthService = class AuthService {
    constructor(http, router, jwtService) {
        this.http = http;
        this.router = router;
        this.jwtService = jwtService;
        this.authUrl = 'auth/api/Authentication';
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    register(userData) {
        return this.http.post(`${this.authUrl}/sign-up`, userData)
            .pipe(map(() => {
            this.router.navigate(['/login']); // odata inregistrat, e redirectionat spre pg de login
        }));
    }
    login(userData) {
        return this.http.post(`${this.authUrl}/login`, userData)
            .pipe(map((response) => {
            if (response === null || response === void 0 ? void 0 : response.token) {
                localStorage.setItem('token', response.token);
                this.router.navigate(['/home']);
            }
        }));
    }
    isLoggedIn() {
        const token = localStorage.getItem('token') || "";
        return !this.jwtService.isTokenExpired(token);
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
let CursService = class CursService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.cursuriUrl = 'https://localhost:5001/api/Cursuri'; // URL to web api
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    getCourses() {
        return this.http.get(this.cursuriUrl).pipe(tap(_ => this.log('fetched courses')), catchError(this.handleError('getCourses', [])));
    }
    getCourse(id) {
        return this.http.get(`${this.cursuriUrl}/${id}`).pipe(tap(_ => this.log('fetched courses')), catchError(this.handleError('getCourses')));
    }
    updateCourse(curs) {
        return this.http.put(this.cursuriUrl, curs, this.httpOptions).pipe(tap(_ => this.log('fetched courses')), catchError(this.handleError('getCourses')));
    }
    addCourse(curs) {
        curs.id = 30;
        curs.zi = 1;
        curs.an = 3;
        return this.http.post(this.cursuriUrl, curs, this.httpOptions).pipe(tap(_ => this.log('add new course')), catchError(this.handleError('getCourses')));
    }
    deleteCourse(id) {
        return this.http.delete(`${this.cursuriUrl}/${id}`, this.httpOptions).pipe(tap(_ => this.log('delete course')), catchError(this.handleError('getCourses')));
    }
    log(message) {
        this.messageService.add(`CursService: ${message}`);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
CursService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CursService);
export { CursService };
//# sourceMappingURL=curs.service.js.map
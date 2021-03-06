import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'environments/environment';
import {Admin} from '../models/admin.interface';
import * as jwt_decode from 'jwt-decode';


@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}
    // Authentication/Authorization
    login(authData : {email , password}): Observable<Admin> {
		return this.http.post<Admin>(environment.url() + 'admins/login' , authData);
    }
    // getter and setter token
	getToken(): string {
		return localStorage.getItem('token');
	}
	setToken(token: string): void {
		localStorage.setItem('token', token);
	}
	// get token expiration Date
	getTokenExpirationDate(token: string): Date {
		const decoded = jwt_decode(token);
		if (decoded.exp === undefined) return null;
		const date = new Date(0);
		date.setUTCSeconds(decoded.exp);
		return date;
	}
	// check if token is expired or not
	isTokenExpired () {
    	let token =  this.getToken();
		if(token == null) return true;
		const date = this.getTokenExpirationDate(token);
		if(date === undefined || date === null) return true;
		return (date.valueOf() < new Date().valueOf());
	}
	// logout Function
	logout (): Observable<any> {
		return this.http.post<Admin>(environment.url() + 'admins/logout' , {});
	}
}

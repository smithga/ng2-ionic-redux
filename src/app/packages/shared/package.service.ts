import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environment';
import { Package } from './package';

@Injectable()
export class PackageService {

    constructor(private http: Http) { }

    public getAll(): Observable<Array<Package>> {
        return this
            .http
            .get(`${environment.apiBaseUrl}/packages`)
            .map(res => res.json());
    }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ConfigService } from '../../core/shared/config.service';
import { Project } from './project';

@Injectable()
export class ProjectService {

    constructor(
        private http: Http,
        private configService: ConfigService
    ) { }

    public getAll(): Observable<Project> {
        return this
            .http
            .get(this.configService.url('projects'))
            .map(res => res.json());
    }

    public get(id: string): Observable<Project> {
        return this
            .http
            .get(this.configService.url(`projects/${id}`))
            .map(res => res.json());
    }

}

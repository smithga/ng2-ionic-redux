import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ConfigService } from '../../core/shared/config.service';
import { ILoginInfo } from './login-info';
import { LoginResult } from './login-result';

@Injectable()
export class AuthService {

    constructor(
        private http: Http,
        private configService: ConfigService
    ) { }

    public login(loginInfo: ILoginInfo): Observable<LoginResult> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('username', loginInfo.username);
        params.set('password', loginInfo.password);
        params.set('consumer_key', this.configService.consumerKey);

        let headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        return this.http
            .get(this.configService.url('securitytokens'),
            {
                search: params,
                headers: headers
            })
            .map(res => res.json() || {});
    }

    logoff() {

    }

}

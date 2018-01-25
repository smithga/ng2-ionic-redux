import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { App } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';

import { ConfigService } from '../../core/shared/config.service';
import { ILoginInfo } from './login-info';
import { LoginResult } from './login-result';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class AuthService {

    constructor(
        private http: Http,
        private configService: ConfigService,
        private app: App
    ) { }

    public login(loginInfo: ILoginInfo): Observable<LoginResult> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('username', loginInfo.username);
        params.set('password', loginInfo.password);
        params.set('consumer_key', this.configService.consumerKey);

        let headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        return this.http
            .get(this.configService.url(`securitytokens/${loginInfo.username}`),
            {
                search: params,
                headers: headers
            })
            .map(res => res.json() || {});
    }

    logoff(): Observable<any> {
        var navCtrl = this.app.getRootNav();
        navCtrl.setRoot(LoginPage);
        return new ReplaySubject(1);
    }

}

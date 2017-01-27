import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';

import { AuthActions } from './auth.actions';
import { AppState } from '../../app-store';
import { AuthService } from '../shared/auth.service';
import { AuthStore} from './';

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private authService: AuthService,
        private authStore: AuthStore
    ) { }

    @Effect()
    login$: Observable<Action> = this.actions$
        .ofType(AuthActions.LOGIN)
        .map(action => action.payload)
        .switchMap(loginUserInfo => this.authService.login(loginUserInfo)
            .map(result => this.authStore.actions.loginSuccess(result))
            .catch(error => of(this.authStore.actions.loginError(error)))
        );

    // Listen on the authenticated property.  If it goes to false redirect to the login page!
    // $authenticated = this.authStore.store.select(this.authStore.selectors.getAuthenticated).skip(1).subscribe(authenticated => {
    //     if (!authenticated) {
    //         this.authService.logoff();
    //     }
    // });

}

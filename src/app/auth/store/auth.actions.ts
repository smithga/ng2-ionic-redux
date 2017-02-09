import { Action } from '@ngrx/store';
import { Response } from '@angular/http';

import { type } from '../../util';
import { LoginInfo } from '../shared/login-info';

export class AuthActions {

    static LOGIN = type('[Auth] Login');
    login(loginInfo: LoginInfo): Action {
        // let loginInfo = new LoginInfo(username, password);
        return {
            type: AuthActions.LOGIN,
            payload: loginInfo
        };
    }

    static LOGIN_SUCCESS = type('[Auth] Login Success');
    loginSuccess(state: any): Action {
        return {
            type: AuthActions.LOGIN_SUCCESS,
            payload: state
        };
    }

    static LOGIN_ERROR = type('[Auth] Login Error');
    loginError(response: Response): Action {
        return {
            type: AuthActions.LOGIN_ERROR,
            payload: response
        };
    }

    static LOGOFF = type('[Auth] Logoff');
    logoff(): Action {
        return {
            type: AuthActions.LOGOFF,
            payload: null
        };
    }

    static LOCK = type('[Auth] Lock');
    lock(): Action {
        return {
            type: AuthActions.LOCK,
            payload: null
        };
    }

    static UNLOCK = type('[Auth] Unlock');
    unlock(loginInfo: LoginInfo): Action {
        return {
            type: AuthActions.UNLOCK,
            payload: loginInfo
        };
    }

    static UNLOCK_SUCCESS = type('[Auth] Unlock Success');
    unlockSuccess(state: any): Action {
        return {
            type: AuthActions.UNLOCK_SUCCESS,
            payload: state
        };
    }

    static UNLOCK_ERROR = type('[Auth] Unlock Error');
    unlockError(error: string): Action {
        return {
            type: AuthActions.UNLOCK_ERROR,
            payload: error
        };
    }

}

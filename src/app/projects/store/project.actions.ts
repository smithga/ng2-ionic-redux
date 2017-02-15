import { Action } from '@ngrx/store';
import { Response } from '@angular/http';

import { type } from '../../util';
import { LoginInfo } from '../shared/login-info';

export class ProjectActions {

    static LOAD_ALL = type('[Projects] Load All');
    loadAll(): Action {
        return {
            type: ProjectActions.LOAD_ALL,
            payload: null
        };
    }

    static LOAD_ALL_SUCCESS = type('[Projects] Load All Success');
    loadAllSuccess(entities: any): Action {
        return {
            type: ProjectActions.LOAD_ALL_SUCCESS,
            payload: { entities }
        };
    }

    static LOAD_ALL_ERROR = type('[Auth] Load All Error');
    loadAllError(response: Response): Action {
        return {
            type: ProjectActions.LOAD_ALL_ERROR,
            payload: { response }
        };
    }

    // static LOGOFF = type('[Auth] Logoff');
    // logoff(): Action {
    //     return {
    //         type: AuthActions.LOGOFF,
    //         payload: null
    //     };
    // }

    // static LOCK = type('[Auth] Lock');
    // lock(): Action {
    //     return {
    //         type: AuthActions.LOCK,
    //         payload: null
    //     };
    // }

    // static UNLOCK = type('[Auth] Unlock');
    // unlock(loginInfo: LoginInfo): Action {
    //     return {
    //         type: AuthActions.UNLOCK,
    //         payload: loginInfo
    //     };
    // }

    // static UNLOCK_SUCCESS = type('[Auth] Unlock Success');
    // unlockSuccess(state: any): Action {
    //     return {
    //         type: AuthActions.UNLOCK_SUCCESS,
    //         payload: state
    //     };
    // }

    // static UNLOCK_ERROR = type('[Auth] Unlock Error');
    // unlockError(error: string): Action {
    //     return {
    //         type: AuthActions.UNLOCK_ERROR,
    //         payload: error
    //     };
    // }

}

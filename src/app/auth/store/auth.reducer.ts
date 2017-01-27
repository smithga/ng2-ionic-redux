// import { createSelector } from 'reselect';

import { LoginUserInfo } from '../shared/login-user-info';
import { AuthActions } from './auth.actions';

export interface AuthState {
    authenticated: boolean;
    locked: boolean;
    token: string;
    user: LoginUserInfo;
    username: string;
    processingMessage: string;
    processing: boolean;
    fullname: string;
};

const initialState: AuthState = {
    authenticated: false,
    locked: false,
    token: null,
    user: null,
    username: '',
    processingMessage: null,
    processing: false,
    fullname: null
};

// This function allows us to read certain properties from localStorage!
function getInitialState(): AuthState {
    initialState.username = sessionStorage.getItem('authModule.username') || initialState.username;
    initialState.fullname = sessionStorage.getItem('authModule.fullname') || initialState.fullname;
    return initialState;
}

// This function allows us to save certain properties to localStorage!
function saveState(state: AuthState): AuthState {
    sessionStorage.setItem('authModule.username', state.username);
    sessionStorage.setItem('authModule.fullname', state.fullname);
    return state;
}

export function authReducer(state, action): AuthState {
    let newState: AuthState;
    if (!state) {
        state = getInitialState();
    }
    switch (action.type) {

        // LOGIN
        case AuthActions.LOGIN: {
            newState = Object.assign({}, state,
                {
                    authenticated: false,
                    processingMessage: null,
                    processing: true
                });
            break;
        }
        case AuthActions.LOGIN_SUCCESS: {
            newState = Object.assign({}, state,
                {
                    authenticated: true,
                    token: action.payload.token,
                    username: action.payload.user.username,
                    fullname: action.payload.user.name,
                    user: action.payload.user,
                    processing: false,
                    processingMessage: null
                });
            break;
        }
        case AuthActions.LOGIN_ERROR: {
            newState = Object.assign({}, state,
                {
                    authenticated: false,
                    processingMessage: action.payload,
                    processing: false
                });
            break;
        }

        // LOGOFF            
        case AuthActions.LOGOFF: {
            newState = Object.assign({}, state,
                {
                    authenticated: false,
                    user: null,
                    processingMessage: null
                });
            break;
        }

        // LOCK            
        case AuthActions.LOCK: {
            newState = Object.assign({}, state,
                {
                    locked: true
                }
            );
            break;
        }

        // UNLOCK    
        case AuthActions.UNLOCK: {
            newState = Object.assign({}, state,
                {
                    locked: true,
                    processing: true,
                    processingMessage: null
                }
            );
            break;
        }
        case AuthActions.UNLOCK_SUCCESS: {
            newState = Object.assign({}, state,
                {
                    locked: false,
                    processing: false,
                    processingMessage: null,
                    token: action.payload.token
                }
            );
            break;
        }
        case AuthActions.UNLOCK_ERROR: {
            newState = Object.assign({}, state,
                {
                    authenticated: true,
                    locked: true,
                    processingMessage: action.payload,
                    processing: false
                });
            break;
        }


        default: {
            newState = state;
            break;
        }
    }
    return saveState(newState);
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
export class AuthBaseSelectors {
    static getAuthenticated = (state: AuthState) => state.authenticated;
    static getToken = (state: AuthState) => state.token;
    static getUser = (state: AuthState) => state.user;
    static getUsername = (state: AuthState) => state.username;
    static getFullname = (state: AuthState) => state.fullname;
    static getProcessing = (state: AuthState) => state.processing;
    static getLocked = (state: AuthState) => state.locked;
    static getprocessingMessage = (state: AuthState) => state.processingMessage;
}

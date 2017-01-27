import { Injectable } from '@angular/core';
import { createSelector } from 'reselect';
import { Store, ActionReducer, combineReducers } from '@ngrx/store';

import { AppState } from '../../app-store';
import { StoreBase } from '../../core/shared/store-base';
import { authReducer, AuthState, AuthBaseSelectors } from './auth.reducer';
import { AuthActions } from './auth.actions';

export interface AuthModuleState {
    auth: AuthState;
}

const reducers = {
    auth: authReducer
};

const authModuleReducer: ActionReducer<AuthModuleState> = combineReducers(reducers);

export function AuthModuleReducer(state: any, action: any): AuthModuleState {
    return authModuleReducer(state, action);
}

// ** Selectors
class AuthSelectors {
    // Reach up to the App Store to grab the slice of the state we need!
    public getAuthState = (state: AppState) => state.authModule.auth;

    public getAuthenticated = createSelector(this.getAuthState, AuthBaseSelectors.getAuthenticated);
    public getToken = createSelector(this.getAuthState, AuthBaseSelectors.getToken);
    public getUser = createSelector(this.getAuthState, AuthBaseSelectors.getUser);
    public getUsername = createSelector(this.getAuthState, AuthBaseSelectors.getUsername);
    public getProcessing = createSelector(this.getAuthState, AuthBaseSelectors.getProcessing);
    public getLocked = createSelector(this.getAuthState, AuthBaseSelectors.getLocked);
    public getProcessingMessage = createSelector(this.getAuthState, AuthBaseSelectors.getprocessingMessage);
    public getFullname = createSelector(this.getAuthState, AuthBaseSelectors.getFullname);
}


// GS:  this object can be injected into any component that needs to consume the store.
//      Reducers and effects will still have to reference the Actions directly but this.
//      reduces the number of imports in each component class!
@Injectable()
export class AuthStore extends StoreBase {
    public selectors: AuthSelectors = new AuthSelectors();
    public actions: AuthActions = new AuthActions();

    constructor(_store: Store<AppState>) {
        super(_store);
    }
}

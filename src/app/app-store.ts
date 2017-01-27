import { ActionReducer, Store, combineReducers } from '@ngrx/store';
import 'rxjs/Rx';
// Modules
import { AuthModuleReducer, AuthModuleState } from './auth/store';


export interface AppState {
    authModule: AuthModuleState,
}

const reducers = {
    authModule: AuthModuleReducer,
};

const appReducer: ActionReducer<AppState> = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
    return appReducer(state, action);
}

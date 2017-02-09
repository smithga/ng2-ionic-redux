import { ActionReducer, combineReducers } from '@ngrx/store';
import 'rxjs/Rx';
// Modules
import { AuthModuleReducer, AuthModuleState } from './auth/store';
import { PackageModuleReducer, PackageModuleState } from './packages/store';

// import { AuthStore, IAuthState } from './auth/store/auth.store';

export interface AppState {
    authModule: AuthModuleState
    // packageModule: PackageModuleState
}

const reducers = {
    authModule: AuthModuleReducer
    // packageModule: PackageModuleReducer
};

const appReducer: ActionReducer<AppState> = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
    return appReducer(state, action);
}

import { ActionReducer, combineReducers } from '@ngrx/store';
import 'rxjs/Rx';
// Modules
import { AuthModuleReducer, AuthModuleState } from './auth/store';
import { PackageModuleReducer, PackageModuleState } from './packages/store';
import { ProjectModuleReducer, ProjectModuleState } from './projects/store';

// import { AuthStore, IAuthState } from './auth/store/auth.store';

export interface AppState {
    authModule: AuthModuleState,
    projectModule: ProjectModuleState
    // packageModule: PackageModuleState
}

const reducers = {
    authModule: AuthModuleReducer,
    projectModule: ProjectModuleReducer
    // packageModule: PackageModuleReducer
};

const appReducer: ActionReducer<AppState> = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
    return appReducer(state, action);
}

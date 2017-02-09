import { Injectable } from '@angular/core';
import { createSelector } from 'reselect';
import { Store, ActionReducer, combineReducers } from '@ngrx/store';

import { AppState } from '../../app-store';
import { StoreBase } from '../../core/shared/store-base';
import { PackageReducer, PackageState, PackageBaseSelectors } from './Package.reducer';
import { PackageActions } from './Package.actions';

export interface PackageModuleState {
    Package: PackageState;
}

const reducers = {
    Package: PackageReducer
};

const packageModuleReducer: ActionReducer<PackageModuleState> = combineReducers(reducers);

export function PackageModuleReducer(state: any, action: any): PackageModuleState {
    return packageModuleReducer(state, action);
}

// ** Selectors
class PackageSelectors {
    // Reach up to the App Store to grab the slice of the state we need!
    // public getPackageState = (state: AppState) => state.packageModule.Package;

    // public getEntities = createSelector(this.getPackageState, PackageBaseSelectors.getEntities);
    // public getLastResponse = createSelector(this.getPackageState, PackageBaseSelectors.getLastResponse);
    // public getProcessing = createSelector(this.getPackageState, PackageBaseSelectors.getProcessing);
    // public getProcessingMessage = createSelector(this.getPackageState, PackageBaseSelectors.getProcessingMessage);
}


// GS:  this object can be injected into any component that needs to consume the store.
//      Reducers and effects will still have to reference the Actions directly but this.
//      reduces the number of imports in each component class!
@Injectable()
export class PackageStore extends StoreBase {
    public selectors: PackageSelectors = new PackageSelectors();
    public actions: PackageActions = new PackageActions();

    constructor(_store: Store<AppState>) {
        super(_store);
    }
}

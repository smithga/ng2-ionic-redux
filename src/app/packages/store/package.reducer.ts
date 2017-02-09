import { Response } from '@angular/http';

import { Package } from '../shared/package';
import { PackageActions } from './Package.actions';

export interface PackageState {
    entities: Array<Package>;
    lastResponse: Response;
    processing: boolean;
    processingMessage: string;
};

const initialState: PackageState = {
    processingMessage: null,
    processing: false,
    entities: [],
    lastResponse: null,
};

// This function allows us to read certain properties from localStorage!
function getInitialState(): PackageState {
    return initialState;
}

// This function allows us to save certain properties to localStorage!
function saveState(state: PackageState): PackageState {
    return state;
}

export function PackageReducer(state, action): PackageState {
    let actions = new PackageActions();
    let newState: PackageState;
    if (!state) {
        state = getInitialState();
    }
    // newState = Object.assign({}, baseReducer(state, action), state);
    switch (action.type) {

        // LOAD_ALL
        case actions.LOAD_ALL: {
            newState = Object.assign({}, state,
                {
                    processingMessage: null,
                    processing: true
                });
            break;
        }
        // LOAD_ALL_SUCCESS
        case actions.LOAD_ALL_SUCCESS: {
            newState = Object.assign({}, state,
                {
                    entities: action.payload.entities,
                    processingMessage: null,
                    processing: false
                });
            break;
        }
        // LOAD_ALL_ERROR
        case actions.LOAD_ALL_ERROR: {
            newState = Object.assign({}, state,
                {
                    processingMessage: action.payload.error,
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
export class PackageBaseSelectors {
    static getEntities = (state: PackageState) => state.entities;
    static getLastResponse = (state: PackageState) => state.lastResponse;
    static getProcessing = (state: PackageState) => state.processing;
    static getProcessingMessage = (state: PackageState) => state.processingMessage;
}

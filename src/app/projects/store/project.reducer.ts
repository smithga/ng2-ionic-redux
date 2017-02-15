import { Response } from '@angular/http';

import { LoginUserInfo } from '../shared/login-user-info';
import { ProjectActions } from './project.actions';
import { Project } from '../shared/project';

export interface ProjectState {
    entities: Array<Project>;
    processingMessage: string;
    processing: boolean;
    lastResponse: string;
};

const initialState: ProjectState = {
    entities: [],
    processingMessage: null,
    processing: false,
    lastResponse: null
};

// This function allows us to read certain properties from localStorage!
function getInitialState(): ProjectState {
    return initialState;
}

// This function allows us to save certain properties to localStorage!
function saveState(state: ProjectState): ProjectState {
    return state;
}

export function projectReducer(state = getInitialState(), action): ProjectState {
    let newState: ProjectState;
    switch (action.type) {

        // LOGIN
        case ProjectActions.LOAD_ALL: {
            newState = Object.assign({}, state,
                {
                    processingMessage: null,
                    processing: true
                });
            break;
        }
        case ProjectActions.LOAD_ALL_SUCCESS: {
            newState = Object.assign({}, state,
                {
                    entities: action.payload.entities,
                    processing: false,
                    processingMessage: null
                });
            break;
        }
        case ProjectActions.LOAD_ALL_ERROR: {
            newState = Object.assign({}, state,
                {
                    processingMessage: action.payload.statusText || 'Unable to connect to server!',
                    lastResponse: action.payload,
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
export class ProjectBaseSelectors {
    static getEntities = (state: ProjectState) => state.entities;
    static getProcessing = (state: ProjectState) => state.processing;
    static getprocessingMessage = (state: ProjectState) => state.processingMessage;
}

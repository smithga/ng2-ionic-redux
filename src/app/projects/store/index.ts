import { Injectable } from '@angular/core';
import { createSelector } from 'reselect';
import { Store, ActionReducer, combineReducers } from '@ngrx/store';

import { AppState } from '../../app-store';
import { StoreBase } from '../../core/shared/store-base';
import { projectReducer, ProjectState, ProjectBaseSelectors } from './project.reducer';
import { ProjectActions } from './project.actions';

export interface ProjectModuleState {
    projects: ProjectState;
}

const reducers = {
    projects: projectReducer
};

const projectModuleReducer: ActionReducer<ProjectModuleState> = combineReducers(reducers);

export function ProjectModuleReducer(state: any, action: any): ProjectModuleState {
    return projectModuleReducer(state, action);
}

// ** Selectors
class ProjectSelectors {
    // Reach up to the App Store to grab the slice of the state we need!
    public getProjectsState = (state: AppState) => state.projectModule.projects;

    public getProcessing = createSelector(this.getProjectsState, ProjectBaseSelectors.getProcessing);
    public getProcessingMessage = createSelector(this.getProjectsState, ProjectBaseSelectors.getprocessingMessage);
    public getEntities = createSelector(this.getProjectsState, ProjectBaseSelectors.getEntities);
}

// GS:  this object can be injected into any component that needs to consume the store.
//      Reducers and effects will still have to reference the Actions directly but this.
//      reduces the number of imports in each component class!
@Injectable()
export class ProjectStore extends StoreBase {
    public selectors: ProjectSelectors = new ProjectSelectors();
    public actions: ProjectActions = new ProjectActions();

    constructor(_store: Store<AppState>) {
        super(_store);
    }
}

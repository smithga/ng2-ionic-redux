import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';

import { AppState } from '../../app-store';
import { ProjectActions } from './project.actions';
import { ProjectService } from '../shared/project.service';
import { ProjectStore} from './';

@Injectable()
export class ProjectEffects {

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private projectService: ProjectService,
        private projectStore: ProjectStore
    ) { }

    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(ProjectActions.LOAD_ALL)
        .map(action => action.payload)
        .switchMap(
            loginUserInfo => this.projectService.getAll()
            .map(result => this.projectStore.actions.loadAllSuccess(result))
            .catch(error => of(this.projectStore.actions.loadAllError(error)))
        );

}

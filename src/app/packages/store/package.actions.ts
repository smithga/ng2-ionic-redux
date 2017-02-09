import { Action } from '@ngrx/store';
import { Response } from '@angular/http';

import { BaseActions } from '../../core/store/base.actions';
import { type } from '../../util';

import { Package } from '../shared/package';

export class PackageActions {

    public LOAD_ALL = type('[Package] Load All');
    loadAll(state: any): Action {
        return {
            type: this.LOAD_ALL,
            payload: state
        };
    }

    public LOAD_ALL_SUCCESS = type('[Package] Load All Success');
    loadAllSuccess(entities: Array<Package>): Action {
        return {
            type: this.LOAD_ALL_SUCCESS,
            payload: { entities }
        };
    }

    public LOAD_ALL_ERROR = type('[Package] Load All Error');
    loadAllError(error: any): Action {
        return {
            type: this.LOAD_ALL_ERROR,
            payload: { error }
        };
    }
    

}

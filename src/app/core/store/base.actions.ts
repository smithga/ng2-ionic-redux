import { Action } from '@ngrx/store';
import { Response } from '@angular/http';

import { type } from '../../util';

export class BaseActions<T> {

    constructor(
        private entityName: string
    ) { }

    // public LOAD_ALL = type(`[${this.entityName}] Load All`);
    // loadAll(state: any): Action {
    //     return {
    //         type: this.LOAD_ALL,
    //         payload: state
    //     };
    // }

}

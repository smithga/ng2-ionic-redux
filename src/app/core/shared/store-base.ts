import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState} from '../../app-store'; 

@Injectable()
export class StoreBase {

    constructor(
        protected _store: Store<AppState>
    ) { };

    public get store() {
        return this._store;
    }

    public get appState(): AppState {
        let state: AppState;
        this._store.take(1).subscribe(s => state = s);
        return state;
    }

}

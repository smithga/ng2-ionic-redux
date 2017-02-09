// import { Injectable } from '@angular/core';
// import { Action } from '@ngrx/store';

// import { type } from '../../util';
// import { LoginInfo } from '../shared/login-info';

// interface IBaseState {
//     processingMessage: string;
//     processing: boolean;
//     entities: any;
// }

// export class BaseStore<T> {

//     public BaseState: IBaseState = {
//         processingMessage: null,
//         processing: false,
//         entities: []
//     };

//     constructor(
//         private entityName: string
//     ) { }

//     // Actions
//     public LOAD_ALL = type(`[${this.entityName}] Load All`);
//     loadAll(): Action {
//         return {
//             type: this.LOAD_ALL,
//             payload: null
//         };
//     }

//     public LOAD_ALL_SUCCESS = type(`[${this.entityName}] Load All Success`);
//     loadAllSuccess(entities: any): Action {
//         return {
//             type: this.LOAD_ALL,
//             payload: { entities }
//         };
//     }

//     public LOAD_ALL_ERROR = type(`[${this.entityName}] Load All Error`);
//     loadAllError(error): Action {
//         return {
//             type: this.LOAD_ALL,
//             payload: { error }
//         };
//     }


//     // Reducer
//     static baseReducer(state, action): any {
//         let newState;
//         switch (action.type) {
//             default: {
//                 newState = state;
//                 break;
//             }
//         }
//     }

//     // Selectors
//     public getProcessing = (state: IBaseState) => state.processing;
//     public getProcessingMessage = (state: IBaseState) => state.processingMessage;
//     public getEntities = (state: IBaseState) => state.entities;

// }


// export interface IAuthState extends IBaseState {
//     authenticated: boolean;
//     locked: boolean;
//     token: string;
//     user: string;
//     username: string;
//     lastResponse: string;
//     fullname: string;
// }

// @Injectable()
// export class AuthStore extends BaseStore<string> {

//     private name: 'AuthStore';

//     // State
//     public state: IAuthState = {
//         authenticated: false,
//         locked: false,
//         token: null,
//         user: null,
//         username: '',
//         lastResponse: null,
//         fullname: null,
//         entities: [],
//         processing: false,
//         processingMessage: ''
//     };

//     constructor() {
//         super('AuthStore');
//     }

//     // Actions
//     static LOGIN = type(`[AuthStore] Login`);
//     login(loginInfo: LoginInfo): Action {
//         return {
//             type: AuthStore.LOGIN,
//             payload: loginInfo
//         };
//     }


//     // Reducer
//     static reducer(state, action): IAuthState {
//         if (!this) {
//             return state;
//         }
//         let newState = Object.assign({}, this.baseReducer(state, action), state);
//         console.log('auth.store');
//         console.dir(newState);

//         switch (action.type) {
//             case AuthStore.LOGIN: {
//                 // Do Something
//                 newState = state;
//             }

//             default: {
//                 newState = state;
//                 break;
//             }
//         }

//     }

// }
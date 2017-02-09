export interface BaseState {
    processingMessage: string;
    processing: boolean;
    entities: any;
};

export function baseReducer(state, action): any {
    let newState;

    switch (action.type) {

        // LOAD_ALL
        // case actions.LOAD_ALL: {
        //     newState = Object.assign({}, state,
        //         {
        //             entities: action.payload.entities,
        //             processingMessage: null,
        //             processing: true
        //         });
        //     break;
        // }


        default: {
            newState = state;
            break;
        }
    }

}

export class BaseSelectors {
    static getProcessingMessage = (state: BaseState) => state.processingMessage;
    static getProcessing = (state: BaseState) => state.processing;
    static getEntities = (state: BaseState) => state.entities;
}

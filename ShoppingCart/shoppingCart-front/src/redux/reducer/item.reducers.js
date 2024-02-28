import {
    ITEM_ACTION_REQUEST_FAILED,
    ITEM_ACTION_REQUEST_STARTED,
    ITEM_ACTION_REQUEST_SUCCESS,
} from "../../constants/actionTypes/item.actionTypes.js";


const INITIAL_STATE = {
    item: [],
    error: null
}

const applyGetItemStarted = (state) => ({
    ...state,

})


const applyGetItemSuccess = (state, action) => {

    console.log(action.payload.itemInfo)

    return (
        {
            ...state,
            item: action.payload.itemInfo,
        }
    )

}

const applyGetItemFailed = (state, action) => {
    return (
        {
            ...state,
            item: null,
            error: action.payload.code

        })
}


function itemReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ITEM_ACTION_REQUEST_STARTED: {
            return applyGetItemStarted(state, action);
        }

        case ITEM_ACTION_REQUEST_SUCCESS: {
            return applyGetItemSuccess(state, action);
        }

        case ITEM_ACTION_REQUEST_FAILED: {
            return applyGetItemFailed(state, action);
        }

        default: return state;
    }

}

export default itemReducer;
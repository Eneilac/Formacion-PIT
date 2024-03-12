import {
    ITEM_ACTION_REQUEST_FAILED,
    ITEM_ACTION_REQUEST_STARTED,
    ITEM_ACTION_REQUEST_SUCCESS,
    ITEM_DEL_ACTION_REQUEST_FAILED,
    ITEM_DEL_ACTION_REQUEST_STARTED,
    ITEM_DEL_ACTION_REQUEST_SUCCESS,
    ITEM_POST_ACTION_REQUEST_FAILED,
    ITEM_POST_ACTION_REQUEST_STARTED,
    ITEM_POST_ACTION_REQUEST_SUCCESS,
} from "../../constants/actionTypes/item.actionTypes.js";



const INITIAL_STATE = {
    item: [],
    error: null,
    post: null,
    del: null,
    idNewItem:null
};



//***************************************************GET****************************************************/
const getItemStarted = (state) => {
    return {
        ...state
    }
};

const getItemSuccess = (state, action) => {
    return {
        ...state,
        item: action.payload.itemInfo
    }
};

const getItemFailed = (state, action) => ({
    ...state,
    error: action.payload.code
});


//***************************************************POST****************************************************/

const postItemStarted = (state) => ({
    ...state
});

const postItemSuccess = (state, action) => {
    const updatedItem = [...state.item, action.payload.item];

    console.log(action.payload.item)

    return {
        ...state,
        item: updatedItem,
        post: action.payload.itemPost,
    };
};

const postItemFailed = (state, action) => ({
    ...state,
    error: action.payload.code
});

//***************************************************DEL****************************************************/
const delItemStarted = (state) => ({
    ...state
});

const delItemSuccess = (state, action) => {
    const updatedItem = state.item.filter(item => item.id !== action.payload.itemDel.deleted_item_id);

    console.log(state.item);
    console.log(action.payload.itemDel.deleted_item_id);

    return {
        ...state,
        item: [...updatedItem],  // Crea un nuevo array con los elementos actualizados
        del: action.payload.itemDel
    };
};


const delItemFailed = (state, action) => ({
    ...state,
    error: action.payload.code
});

function itemReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ITEM_ACTION_REQUEST_STARTED: {
            return getItemStarted(state);
        }
        case ITEM_ACTION_REQUEST_SUCCESS: {
            return getItemSuccess(state, action);
        }
        case ITEM_ACTION_REQUEST_FAILED: {
            return getItemFailed(state, action);
        }
        case ITEM_POST_ACTION_REQUEST_STARTED: {
            return postItemStarted(state)
        }
        case ITEM_POST_ACTION_REQUEST_SUCCESS: {
            return postItemSuccess(state, action)
        }
        case ITEM_POST_ACTION_REQUEST_FAILED: {
            return postItemFailed(state, action)
        }
        case ITEM_DEL_ACTION_REQUEST_STARTED: {
            return delItemStarted(state, action)
        }
        case ITEM_DEL_ACTION_REQUEST_SUCCESS: {
            return delItemSuccess(state, action)
        }
        case ITEM_DEL_ACTION_REQUEST_FAILED: {
            return delItemFailed(state, action)
        }

        default: return state;

    }

}

export default itemReducer;



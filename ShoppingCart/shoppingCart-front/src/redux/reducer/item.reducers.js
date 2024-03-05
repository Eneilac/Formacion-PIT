import {
    ITEM_ACTION_REQUEST_FAILED,
    ITEM_ACTION_REQUEST_STARTED,
    ITEM_ACTION_REQUEST_SUCCESS,
    ITEM_POST_ACTION_REQUEST_FAILED,
    ITEM_POST_ACTION_REQUEST_STARTED,
    ITEM_POST_ACTION_REQUEST_SUCCESS,
} from "../../constants/actionTypes/item.actionTypes.js";


const INITIAL_STATE = {
    item: [],
    error: null
}



//*********************************************GET***********************************************/

const applyGetItemStarted = (state) => ({
    ...state,

})

const applyGetItemSuccess = (state, action) => {
    const itemInfoArray = action.payload.itemInfo;
    const itemInfoJSON = JSON.stringify(itemInfoArray);
    localStorage.setItem('listItems', itemInfoJSON);


    return (
        {
            ...state,
            item: action.payload.itemInfo
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


//*********************************************POST******************************************/

const applyPostItemStarted = (state) => ({
    ...state,
})

const applyPostItemSuccess = (state, action) => {
    return (
        {
            ...state,
            post: action.payload.itemInfo,
        }
    )
}

const applyPostItemFailed = (state, action) => {
    return (
        {
            ...state,
            item: null,
            error: action.payload.code
        })
}


//*********************************************DELETE******************************************/


// const applyDelItemStarted = (state) => ({
//     ...state,
// })

// const applyDelItemSuccess = (state, action) => {
//     return (
//         {
//             ...state,
//             post: action.payload.itemInfo,
//         }
//     )
// }

// const applyDelItemFailed = (state, action) => {
//     return (
//         {
//             ...state,
//             item: null,
//             error: action.payload.code
//         })
// }






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
        case ITEM_POST_ACTION_REQUEST_STARTED: {
            return applyPostItemStarted(state)
        }
        case ITEM_POST_ACTION_REQUEST_SUCCESS: {
            return applyPostItemSuccess(state, action)
        }
        case ITEM_POST_ACTION_REQUEST_FAILED: {
            return applyPostItemFailed(state, action)
        }






        default: return state;

    }

}

export default itemReducer;
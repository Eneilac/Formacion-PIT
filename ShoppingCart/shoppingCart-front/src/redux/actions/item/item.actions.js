import {
    ITEM_ACTION_REQUEST_STARTED,
    ITEM_ACTION_REQUEST_SUCCESS,
    ITEM_ACTION_REQUEST_FAILED,
    ITEM_POST_ACTION_REQUEST_STARTED,
    ITEM_POST_ACTION_REQUEST_SUCCESS,
    ITEM_POST_ACTION_REQUEST_FAILED,
    ITEM_DEL_ACTION_REQUEST_STARTED,
    ITEM_DEL_ACTION_REQUEST_SUCCESS,
    ITEM_DEL_ACTION_REQUEST_FAILED
} from '../../../constants/actionTypes/item.actionTypes';

//** GET */

const itemActionRequestStarted = (query) => ({
    type: ITEM_ACTION_REQUEST_STARTED,
    payload: query
});


const itemActionRequestSuccess = (itemInfo) => {
    return {
        type: ITEM_ACTION_REQUEST_SUCCESS,
        payload: { itemInfo }
    }
};


const itemActionRequestFailed = (error) => ({
    type: ITEM_ACTION_REQUEST_FAILED,
    payload: error
})


//** POST  */

const itemPostActionRequestStarted = (query) => ({
    type: ITEM_POST_ACTION_REQUEST_STARTED,
    payload: query
});


const itemPostActionRequestSuccess = (itemPost) => {
    return {
        type: ITEM_POST_ACTION_REQUEST_SUCCESS,
        payload: {item:itemPost.data.item}
    }
};


const itemPostActionRequestFailed = (error) => ({
    type: ITEM_POST_ACTION_REQUEST_FAILED,
    payload: error
})

//** del  */

const itemDelActionRequestStarted = (query) => ({
    type: ITEM_DEL_ACTION_REQUEST_STARTED,
    payload: query
});


const itemDelActionRequestSuccess = (itemDel) => ({
    type: ITEM_DEL_ACTION_REQUEST_SUCCESS,
    payload: { itemDel }
});


const itemDelActionRequestFailed = (error) => ({
    type: ITEM_DEL_ACTION_REQUEST_FAILED,
    payload: error
})








export {
    itemActionRequestStarted,
    itemActionRequestSuccess,
    itemActionRequestFailed,
    itemPostActionRequestStarted,
    itemPostActionRequestSuccess,
    itemPostActionRequestFailed,
    itemDelActionRequestStarted,
    itemDelActionRequestSuccess,
    itemDelActionRequestFailed
}
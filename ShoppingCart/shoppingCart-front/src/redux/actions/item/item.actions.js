import {
    ITEM_ACTION_REQUEST_STARTED,
    ITEM_ACTION_REQUEST_SUCCESS,
    ITEM_ACTION_REQUEST_FAILED,
    ITEM_POST_ACTION_REQUEST_STARTED,
    ITEM_POST_ACTION_REQUEST_SUCCESS,
    ITEM_POST_ACTION_REQUEST_FAILED
} from '../../../constants/actionTypes/item.actionTypes';

//** GET */

const itemActionRequestStarted = (query) => ({
    type: ITEM_ACTION_REQUEST_STARTED,
    payload: query
});


const itemActionRequestSuccess = (itemInfo) => ({
    type: ITEM_ACTION_REQUEST_SUCCESS,
    payload: { itemInfo }
});


const itemActionRequestFailed = (error) => ({
    type: ITEM_ACTION_REQUEST_FAILED,
    payload: error
})


//** POST  */

const itemPostActionRequestStarted = (query) => ({
    type: ITEM_POST_ACTION_REQUEST_STARTED,
    payload: query
});


const itemPostActionRequestSuccess = (itemInfo) => ({
    type: ITEM_POST_ACTION_REQUEST_SUCCESS,
    payload: { itemInfo }
});


const itemPostActionRequestFailed = (error) => ({
    type: ITEM_POST_ACTION_REQUEST_FAILED,
    payload: error
})





export {
    itemActionRequestStarted,
    itemActionRequestSuccess,
    itemActionRequestFailed,
    itemPostActionRequestStarted,
    itemPostActionRequestSuccess,
    itemPostActionRequestFailed
}
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import reducers from "../reducers";
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import mySaga from "../saga";


const storeConfigure = ({ initialState = {}, cache = false }) => {
    const persistConfig = {
        key: 'root',
        storage: storage,
    }

    const persistedReducers = persistReducer(persistConfig, reducers);
    const sagaMiddleware = createSagaMiddleware()

    let store = createStore(
        persistedReducers,
        initialState,
        applyMiddleware(sagaMiddleware)
    )

    sagaMiddleware.run(mySaga)

    return store;

}

export default storeConfigure;
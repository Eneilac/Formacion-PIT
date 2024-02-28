import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga";
import  reducers  from "../reducer/";


const storeConfigure = ({ initialState = {} }) => {
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

    sagaMiddleware.run(rootSaga)
    return store;

}

export default storeConfigure;
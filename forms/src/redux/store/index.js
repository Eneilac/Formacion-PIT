import { configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import reducers from '../reducers'




const storeConfig = ({ initialState = {}, cache = false }) => {

    const persistConfig = {
        key: 'root',
        storage: storage
    }


    const persistedReducers = persistReducer(persistConfig, reducers)

    let store = configureStore(
        persistedReducers,
        initialState
    )

    return store
}


export default storeConfig;
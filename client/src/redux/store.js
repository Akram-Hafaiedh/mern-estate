import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import persistStore from 'redux-persist/es/persistStore'

const rootReducer = combineReducers({
    user: userReducer
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    // A standard Redux slice reducer function containing the logic for updating the cached data.
    // Add this to the Redux store using the reducerPath you provided as the root state key.
    reducer: persistedReducer,
    // A custom Redux middleware that contains logic for managing caching, invalidation, subscriptions, polling, and more.
    //  Add this to the store setup after other middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        // thunk: boolean | options,
        // immutableCheck: boolean | options,
        // actionCreatorCheck : boolean | options
    })
})


const persistor = persistStore(store);

export { store, persistor };
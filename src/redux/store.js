import {createStore, applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducers from './rootReducers'

const logger = createLogger()
let middleWares = []

if(process.env.NODE_ENV === "development"){
    middleWares = [...middleWares, thunk, logger]
}else{
    middleWares = [...middleWares, thunk]
} 
export const store = createStore(rootReducers, applyMiddleware(...middleWares))
export const persistor = persistStore(store)

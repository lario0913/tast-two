import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import dataReducer from './reducers/reducer'

const persistConfig = {key:"kbc09", storage, whitelist:["covidData"]}

const rootReducer = combineReducers({
    covidData: dataReducer
})

export default persistReducer(persistConfig, rootReducer)
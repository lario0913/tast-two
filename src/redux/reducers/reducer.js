import {actionTypes} from '../types'

const {GET_DATA} = actionTypes

const initialState = {
    covidData: []
}

const dataReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DATA : 
            return {
                ...state,
                covidData: action.covidData
            }
        default: return state
    }
}

export default dataReducer
import {actionTypes} from './types'

export const updateCovidDataState = (payload) => {
    return {
        type: actionTypes.GET_DATA,
        covidData: payload 
    }
}

export const getCovidDataAction = () => {
    return async (dispatch) => {
        try{
            const response = await fetch("https://covidnigeria.herokuapp.com/api")
            const data = await response.json()
            dispatch(updateCovidDataState(data))
            
        }catch(error){
            console.log(error)
        }
    }
}
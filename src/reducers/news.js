import * as Types from './../constants/ActionTypes'
const initialState = []
const news = (state=initialState, action) =>{
    switch(action.type){
        case Types.FETCH_NEWS:
            state = action.news
            return [...state]
        default: return [...state]
    }
}

export default news
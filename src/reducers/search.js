import * as Types from './../constants/ActionTypes'
const initialState = ''

const search = (state=initialState, action) =>{
    switch (action.type) {
        case Types.SEARCH:
            return action.keyword
        default:return state
    }
}

export default search
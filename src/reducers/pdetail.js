import * as Types from './../constants/ActionTypes'

const initialState = {}

const pdetail = (state=initialState,action) =>{
    switch (action.type){
        case Types.PRODUCT_DETAIL :
            return action.product
        default : return state
    }
}

export default pdetail
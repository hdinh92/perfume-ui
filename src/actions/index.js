import * as Types from './../constants/ActionTypes'
import callAPI from './../utils/callAPI'

export const actFetchProducts = products =>{
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actFetchProductsRequest = () =>{
    return dispatch =>{
        return callAPI('products','GET',null).then(res=>{
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actAddToCart = (product,quantity) =>{
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDeleteProductInCart = (product) =>{
    return {
        type : Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product,quantity) =>{
    return{
        type : Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}

export const actGetProduct = product =>{
    return {
        type : Types.PRODUCT_DETAIL,
        product
    }
}

export const actGetProductRequest = id =>{
    return dispatch =>{
        return callAPI(`products/${id}`,'GET',null).then(res=>{
            dispatch(actGetProduct(res.data))
        })
    }
}

export const actFetchNews = news =>{
    return {
        type : Types.FETCH_NEWS,
        news
    }
}
export const actFetchNewsRequest = () =>{
    return dispatch =>{
        return callAPI(`news`,'GET',null).then(res=>{
            dispatch(actFetchNews(res.data))
        })
    }
}
export const actSeatch = keyword =>{
    return {
        type : Types.SEARCH,
        keyword
    }
}

export const actCheckOutRequest = order =>{
    return dispatch=>{
        return callAPI('orders','POST',order).then(res=>{
            dispatch(actCheckOut(res.data))
        })
    }
}

export const actCheckOut = order =>{
    return {
        type : Types.CHECKOUT,
        order
    }
}

export const actClearCart = () =>{
    return {
        type: Types.ON_CLEAR_CART
    }
}
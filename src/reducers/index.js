import {combineReducers} from 'redux'
import products from './product'
import cart from './cart'
import pdetail from './pdetail'
import news from './news'
import search from './search'

const appReducers = combineReducers({
    products,
    cart,
    pdetail,
    news,
    search
})

export default appReducers
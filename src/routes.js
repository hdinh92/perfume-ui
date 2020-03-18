import React from 'react';
import ProductDetail from './containers/ProductDetail.js/ProductDetail';
import NotFound from './components/Notfound/NotFound';
import ProductContainer from './containers/ProductContainer/ProductContainer';
import CartContainer from './containers/CartContainer/CartContainer';
import Warranty from './components/Warranty/Warranty';
import Checkout from './containers/Checkout/Checkout';
import BlogContainer from './containers/BlogContainer/BlogContainer';
import NewsDetail from './containers/NewsDetailContainer/NewsDetailContainer';
import MProductContainer from './containers/MProductContainer/MProductContainer';
import FProductContainer from './containers/FProductContainer/FProductContainer';

const routes = [
    {
        path: '/',
        exact: true,
        main: ({history}) => <ProductContainer history = {history}/>
    },
    {
        path: '/male',
        exact: false,
        main: ({history}) => <MProductContainer history = {history}/>
    },
    {
        path: '/female',
        exact: false,
        main: ({history}) => <FProductContainer history = {history}/>
    },
    {
        path: '/product/:id/:name',
        exact: false,
        main : ({match}) =><ProductDetail match={match}/>
    },
    {
        path: '/cart',
        exact: false,
        main: ({history}) =><CartContainer  history = {history}/>
    },
    {
        path: '/blog',
        exact: true,
        main: ({history}) =><BlogContainer  history = {history}/>
    },
    {
        path: '/blog/:id',
        exact: false,
        main: ({match}) =><NewsDetail match={match}/>
    },
    {
        path: '/waranty',
        exact: false,
        main: ({history}) =><Warranty  history = {history}/>
    },
    {
        path: '/checkout',
        exact: false,
        main: ({history}) =><Checkout  history = {history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    }
]

export default routes;
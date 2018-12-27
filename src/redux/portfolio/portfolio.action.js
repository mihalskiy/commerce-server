//import { createAction } from 'redux-actions';

const GET_PORTFOLIO_SUCCESS = 'GET_PORTFOLIO_SUCCESS';
const GET_PORTFOLIO = 'GET_PORTFOLIO';

const actionTypes = {
    GET_PORTFOLIO_SUCCESS,
    GET_PORTFOLIO,
};

export default actionTypes;

export const  getPortfolio = () => {
    debugger
    return { type: 'GET_PORTFOLIO' }
}

export const getPortfolioSuccess = (payload) => {
    debugger
    return {
        type: GET_PORTFOLIO_SUCCESS,
        payload: {
            priceInfo: payload
        }
    }
};

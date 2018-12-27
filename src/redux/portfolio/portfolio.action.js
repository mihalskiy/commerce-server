//import { createAction } from 'redux-actions';

const GET_PORTFOLIO_SUCCESS = 'GET_PORTFOLIO_SUCCESS';
const GET_PORTFOLIO = 'GET_PORTFOLIO';
const FAILED_PORTFOLIO = 'FAILED_PORTFOLIO';

const actionTypes = {
    GET_PORTFOLIO_SUCCESS,
    GET_PORTFOLIO,
    FAILED_PORTFOLIO,
};

export default actionTypes;

export const  getPortfolio = () => {
    return { type: 'GET_PORTFOLIO' }
};

export const getPortfolioSuccess = (payload) => {
    return {
        type: GET_PORTFOLIO_SUCCESS,
        payload: {
            portfolioList: payload
        }
    }
};

export const  failedPortfolio = (err) => {
    return {
        type: 'FAILED_PORTFOLIO',
        err: err
    }
};

//import { createAction } from 'redux-actions';

const GET_PORTFOLIOS_SUCCESS = 'GET_PORTFOLIOS_SUCCESS';
const GET_PORTFOLIOS = 'GET_PORTFOLIOS';
const FAILED_PORTFOLIO = 'FAILED_PORTFOLIO';
const GET_PORTFOLIO_ID = 'GET_PORTFOLIO_ID';
const GET_PORTFOLIO_ID_SUCCESS = 'GET_PORTFOLIO_ID_SUCCESS';

const actionTypes = {
    GET_PORTFOLIOS_SUCCESS,
    GET_PORTFOLIOS,
    FAILED_PORTFOLIO,
    GET_PORTFOLIO_ID,
    GET_PORTFOLIO_ID_SUCCESS,
};

export default actionTypes;

export const  getPortfolioList = () => {
    return {
        type: 'GET_PORTFOLIOS',
        loading: true
    }
};

export const  getPortfolioById = (id) => {
    return {
        type: 'GET_PORTFOLIO_ID',
        loading: true,
        payload: {
            id: id
        }
    }
};

export const getPortfolioSuccess = (payload) => {
    return {
        type: GET_PORTFOLIOS_SUCCESS,
        payload: {
            portfolioList: payload
        }
    }
};

export const getPortfolioIdSuccess = (payload) => {
    return {
        type: GET_PORTFOLIO_ID_SUCCESS,
        payload
    }
};

export const  failedPortfolio = (err) => {
    return {
        type: 'FAILED_PORTFOLIO',
        err: err
    }
};

const GET_PORTFOLIOS_SUCCESS = 'GET_PORTFOLIOS_SUCCESS';
const GET_PORTFOLIOS_BY_TYPE= 'GET_PORTFOLIOS_BY_TYPE';
const GET_PORTFOLIOS= 'GET_PORTFOLIOS';
const FAILED_PORTFOLIO = 'FAILED_PORTFOLIO';
const GET_PORTFOLIO_ID = 'GET_PORTFOLIO_ID';
const GET_PORTFOLIO_ID_SUCCESS = 'GET_PORTFOLIO_ID_SUCCESS';

const actionTypes = {
    GET_PORTFOLIOS_SUCCESS,
    GET_PORTFOLIOS,
    GET_PORTFOLIOS_BY_TYPE,
    FAILED_PORTFOLIO,
    GET_PORTFOLIO_ID,
    GET_PORTFOLIO_ID_SUCCESS,
};

export default actionTypes;

export const  getPortfolioListByType = (payload) => {
    return {
        type: 'GET_PORTFOLIOS_BY_TYPE',
        loading: true,
        payload
    }
};

export const  getPortfolioList = (payload) => {
    return {
        type: 'GET_PORTFOLIOS',
        loading: true,
        payload
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
        loading: false,
         payload: {
             payload
         }
    }
};

export const getPortfolioIdSuccess = (payload) => {
    return {
        type: GET_PORTFOLIO_ID_SUCCESS,
        payload: {
            payload
        },
        loading: false
    }
};

export const  failedPortfolio = (err) => {
    return {
        type: 'FAILED_PORTFOLIO',
        err: err
    }
};

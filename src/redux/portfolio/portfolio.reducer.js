import PortfolioAction from './portfolio.action';
import initialState from '../store/initialState';
import Immutable from "seamless-immutable";



export const INITIAL_STATE = Immutable(initialState.portfolio);


function reducer(state = INITIAL_STATE, action = {}) {
    const { type = '', payload = {} } = action;
    switch (type) {
        case PortfolioAction.GET_PORTFOLIOS :
            return state.merge({
                loading: true,
                ...payload
            });
        case PortfolioAction.GET_PORTFOLIO_ID :
            return state.merge({
                loading: true,
                ...payload
            });
        case PortfolioAction.GET_PORTFOLIO_ID_SUCCESS :
            return state.merge({
                loading: false,
                ...payload
            });
        case PortfolioAction.GET_PORTFOLIOS_SUCCESS :
            return state.merge({
                loading: false,
                ...payload
            });
        case PortfolioAction.FAILED_PORTFOLIO :
            return state.merge({
                ...payload
            });
        default:
            return state;
    }
}

export default reducer;

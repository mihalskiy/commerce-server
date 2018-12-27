import PortfolioAction from './portfolio.action';
import initialState from '../store/initialState';
import Immutable from "seamless-immutable";



export const INITIAL_STATE = Immutable(initialState.portfolio);


function reducer(state = initialState.portfolio, action = {}) {
    const { type = '', payload = {} } = action;
    switch (type) {
        case PortfolioAction.GET_PORTFOLIO :
            return state.merge({
                loading: true,
                ...payload
            });
        case PortfolioAction.GET_PORTFOLIO_SUCCESS :
            return state.merge({
                loading: false,
                ...payload
            });
        case PortfolioAction.FETCH_FAILED_ORDER :
            return state.merge({
                ...payload
            });
        default:
            return state;
    }
}

export default reducer;

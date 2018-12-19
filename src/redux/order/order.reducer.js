import OrderAction from './order.action';
import initialState from '../store/initialState';

function reducer(state = initialState.order, action = {}) {
    const { type = '', payload = {} } = action;
    switch (type) {
        case OrderAction.NEW_ORDER :
            return state.merge({
                loading: false,
                ...payload
            });
        case OrderAction.FETCH_SUCCEEDED :
            return state.merge({
                loading: false,
                ...payload
            });
        case OrderAction.FETCH_FAILED_ORDER :
            return state.merge({

            });
        default:
            return state;
    }
}

export default reducer;

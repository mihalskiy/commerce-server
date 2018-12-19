import { combineReducers } from 'redux';
import TaleReducer from '../table/table.reducer';
import OrderReducer from '../order/order.reducer';
// TODO: define new reducers here

export default () => combineReducers({
    table: TaleReducer,
    order: OrderReducer,
    // TODO: include new reducers here
});

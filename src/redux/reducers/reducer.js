import { combineReducers } from 'redux';
import TaleReducer from '../table/table.reducer';
import OrderReducer from '../order/order.reducer';
import PortfolioReducer from '../portfolio/portfolio.reducer';

export default () => combineReducers({
    table: TaleReducer,
    order: OrderReducer,
    portfolio: PortfolioReducer
});

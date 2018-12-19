import { all } from 'redux-saga/effects';
import TableSaga from '../table/table.saga';
import OrderSaga from '../order/order.saga';

export default function* rootSaga() {
    yield all([
        TableSaga(),
        OrderSaga()
    ]);
}

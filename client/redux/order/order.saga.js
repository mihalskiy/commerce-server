import { put, takeLatest, all } from 'redux-saga/effects';
import actionTypes, {fetchSuccessAction} from "./order.action";
import { Api } from './Api';

function* addOrderSaga(payload) {

    try {
        const result = yield Api.insertNewOrder(payload);
        if (result.ok) {
            yield put(fetchSuccessAction(result.ok));
        }

    } catch (error) {
        yield put({ type: actionTypes.FETCH_FAILED_ORDER, error });
        console.error(`Error is : ${error}`);
    }
}

function* actionWatcher() {
    yield takeLatest(actionTypes.NEW_ORDER, addOrderSaga)
}

function* Watcher() {
    yield all([
        actionWatcher()
    ]);
}

export default Watcher;

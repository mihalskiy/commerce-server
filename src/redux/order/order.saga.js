import { put, takeLatest, all } from 'redux-saga/effects';
import actionTypes, {fetchSuccessAction, fetchFailedAction} from "./order.action";
import { Api } from './Api';

function* addOrderSaga(payload) {
    const result = yield Api.insertNewOrder(payload);
    debugger
    try {

        if (result != undefined) {
            yield put(fetchSuccessAction(result.ok));
        } else {
            yield put(fetchFailedAction(true));
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

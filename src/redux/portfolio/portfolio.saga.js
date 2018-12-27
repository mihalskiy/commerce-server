import { put, takeLatest, all } from 'redux-saga/effects';
import actionTypes, {getPortfolioSuccess, failedPortfolio} from "./portfolio.action";
import {Api} from "./Api";
import {fetchFailedAction} from "../order/order.action";

function* getPortfolio() {
    try {
        const result = yield Api.getPortfolioList();
        yield put(getPortfolioSuccess(result));
    } catch (e) {
        yield put(failedPortfolio(e));
    }

}

function* actionWatcher() {
    yield takeLatest(actionTypes.GET_PORTFOLIO, getPortfolio)
}

function* Watcher() {
    yield all([
        actionWatcher()
    ]);
}

export default Watcher;

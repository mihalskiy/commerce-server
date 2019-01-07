import { put, takeLatest, call, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import actionTypes, {getPortfolioSuccess, failedPortfolio, getPortfolioIdSuccess} from "./portfolio.action";
import {Api} from "./Api";

function* getPortfolioList(params) {
    try {
        const result = yield Api.getPortfolioList(params.payload);
        if (result) {
            yield put(getPortfolioSuccess({
                success: true,
                result
            }));
        }
    } catch (e) {
        yield put(failedPortfolio(e));
    }

}

function* getPortfolioById({payload: {id}}) {
    try {
        const result = yield Api.getPortfolioById(id);
        yield put(getPortfolioIdSuccess({payload: {result}}));
    } catch (e) {
        yield put(failedPortfolio(e));
    }

}

function* actionWatcher() {
    yield takeLatest(actionTypes.GET_PORTFOLIOS, getPortfolioList);
    yield takeLatest(actionTypes.GET_PORTFOLIO_ID, getPortfolioById);
}

function* Watcher() {
    yield all([
        actionWatcher()
    ]);
}

export default Watcher;

import { put, takeLatest, all } from 'redux-saga/effects';
import actionTypes, {getPortfolioSuccess} from "./portfolio.action";



const arr = [
    {
        name: 'Простой',
        price: '29',
        cent: '99',
        currency: '$',
        title: 'bla',
        fields: [
            {
                id: 1,
                name: 'adgfgrwg'
            }
        ]
    },
    {
        name: 'Стандарт',
        price: '99',
        cent: '59',
        currency: '$',
        title: 'xaxaxax'
    },
    {
        name: 'Лучший',
        price: '15',
        cent: '45',
        currency: '$',
        title: 'magic'
    }
];

function* getPortfolio() {
    yield put(getPortfolioSuccess(arr));
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

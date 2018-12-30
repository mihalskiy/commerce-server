import { put, takeLatest, call, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {getTableSuccess} from './table.action';
import actionTypes from "./table.action";



const arr = [	// TODO: define new sagas here
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

function* getTableSaga({payload: {tableName}}) {
    const table = arr.find((el)=>{
        return el.name === tableName
    });
    yield put(getTableSuccess(table));
}

function* actionWatcher() {
    yield takeLatest(actionTypes.GET_TABLE, getTableSaga)
}

function* Watcher() {
    yield all([
        actionWatcher()
    ]);
}

export default Watcher;

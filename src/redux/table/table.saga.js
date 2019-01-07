import { put, takeLatest, call, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {getTableSuccess} from './table.action';
import actionTypes from "./table.action";



const arr = [	// TODO: define new sagas here
    {
        name: 'Простой',
        price: '29',
        type: 'simple',
        cent: '99',
        currency: '$',
        title: 'bla',
        fields: [
            {
                id: 1,
                name: 'adgfgrwg'
            },
            {
                id: 1,
                name: 'sryhtjtu'
            },
            {
                id: 1,
                name: 'ertyrutio'
            },
            {
                id: 1,
                name: 'rtyui'
            }
        ]
    },
    {
        name: 'Стандарт',
        price: '99',
        cent: '59',
        type: 'standard',
        currency: '$',
        title: 'xaxaxax',
        fields: [
            {
                id: 1,
                name: 'adgfrtrygrwg'
            },
            {
                id: 1,
                name: 'sryhtjtu'
            },
            {
                id: 1,
                name: 'ertyrutio'
            },
            {
                id: 1,
                name: 'rtyui'
            }
        ]
    },
    {
        name: 'Лучший',
        price: '15',
        cent: '45',
        type: 'best',
        currency: '$',
        title: 'magic',
        fields: [
            {
                id: 1,
                name: 'adgfdsfrtdhygrwg'
            },
            {
                id: 1,
                name: 'sryhtjtu'
            },
            {
                id: 1,
                name: 'ertyrutio'
            },
            {
                id: 1,
                name: 'rtyui'
            }
        ]
    }
];



function* getTableSaga(params) {
    const {typeIndex, type} = params.payload;
    const table = arr.find((el)=>{
        return el.type === type[0]
    });
    yield put(getTableSuccess({
        table: table,
        typeIndex: typeIndex ? typeIndex : 0,
    }));
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

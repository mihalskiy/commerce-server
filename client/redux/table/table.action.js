//import { createAction } from 'redux-actions';

const GET_TABLE_PENDING = 'table/GET_TABLE_PENDING';
const GET_TABLE_SUCCESS = 'table/GET_TABLE_SUCCESS';
const GET_TABLE = 'table/GET_TABLE';

const actionTypes = {
    GET_TABLE_PENDING,
    GET_TABLE_SUCCESS,
    GET_TABLE,
};

export default actionTypes;

export const getTablePending = () => {
    return { type: 'GET_TABLE_PENDING' }
};

export const  getTable = (tableName) => {
    return {
        type: GET_TABLE,
        payload: {
            tableName: tableName
        }
    }
}

export const getTableSuccess = (payload) => {
    return {
        type: GET_TABLE_SUCCESS,
        payload: {
            priceInfo: payload
        }
    }
};

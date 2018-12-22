//import { createAction } from 'redux-actions';

const GET_ORDER = 'order/GET_ORDER';
const NEW_ORDER = 'order/NEW_ORDER';
const FETCH_FAILED_ORDER = 'order/FETCH_FAILED_ORDER';
const FETCH_SUCCEEDED = 'order/FETCH_SUCCEEDED';

const actionTypes = {
    GET_ORDER,
    NEW_ORDER,
    FETCH_FAILED_ORDER,
    FETCH_SUCCEEDED,
};

export default actionTypes;

export const  getOrder = data => {
    return {
        loading: true,
        type: NEW_ORDER,
        payload: {
            data
        }
    }
};

export const  fetchSuccessAction = (payload) => {
    return {
        type: FETCH_SUCCEEDED,
        loading: false,
        payload: {
            complate: payload
        }
    }
};

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED_ORDER,
        payload: {
            error
        }
    }
}

<<<<<<< HEAD
export function createAction(type, payload = {}) {
    return {
        type, 
        ...payload,
    };
}

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function createRequestTypes(base) {
    if (!base) {
        throw new Error('cannot create request type with base = \'\' or base = null');
    }

    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
}
=======
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function createRequestType(base) {
    if (!base) {
        throw new Error('Cannot create request type with base = \'\' or base = null ')
    }
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
}

export function createAction(type, payload = {}) {
    return {
      type,
      ...payload,
    };
}  
>>>>>>> 840cc7fbef9e7a1176f1893f1e700bdea41ad19a

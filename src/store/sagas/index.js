import { all, call, put, fork } from 'redux-saga/effects';
import { watchMostPopularVideos } from './videos';

export default function* () {
    yield all([
      fork(watchMostPopularVideos), // if this detects the correct request, it will create a worker saga
    ])
}

// This file is the root saga

/* Entity must have a success, failure, request method. Request returns a promise when called */
export function* fetchEntity(request, entity, ...args) {
    try {
      const response = yield call(request);
      // directly return the result object and throw away the headers and the status text here
      // if status and headers are needed, then instead of returning response.result, we have to return just response.
      yield put(entity.success(response.result, ...args));
    } catch (error) {
      yield put(entity.failure(error, ...args));
    }
}  
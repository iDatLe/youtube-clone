import {createAction, createRequestType, REQUEST, SUCCESS, FAILURE} from './index';
// createAction(type, payload = {})
// createRequestTypes(base) ---> base_type

export const MOST_POPULAR = createRequestType('MOST_POPULAR');
// By calling this, we store an object with three fields inside 'MOST POPULAR'

export const mostPopular = {
  request: (amount, loadDescription, nextPageToken) => createAction(MOST_POPULAR[REQUEST], {amount, loadDescription, nextPageToken}),
  // the nextPageToken is used for youtube's supported pagination feature
  success: (response) => createAction(MOST_POPULAR[SUCCESS], {response}),
  // if successful, pass in type "MOST_POPULAR_SUCCESS" and payload of response
  failure: (response) => createAction(MOST_POPULAR[FAILURE], {response}),
}


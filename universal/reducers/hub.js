import { 
  SET_USER_ID, SYNC_IDM_REQUEST, SYNC_IDM_SUCCESS, SYNC_IDM_FAILURE,
  FETCH_PIS_REQUEST, FETCH_PIS_SUCCESS, FETCH_PIS_FAILURE
} from '../constants/ActionTypes';

const initialState = {
  isWorking: false,
  userId: null,
  error: null,
  identifier: null,
  pis: null
};

export default function hub(state = initialState, action) {
  switch (action.type) {
    case SET_USER_ID:
      return Object.assign({}, state, {
        userId: action.userId
      });

    case SYNC_IDM_REQUEST:
      return Object.assign({}, state, {
        identifier: action.identifier
      });
    case SYNC_IDM_SUCCESS:
      return Object.assign({}, state, {
        pis: action.data
      });
    case SYNC_IDM_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });

    case FETCH_PIS_REQUEST:
      return Object.assign({}, state, {
        search: action.search,
        isWorking: true
      });
    case FETCH_PIS_SUCCESS:
      return Object.assign({}, state, {
        pis: action.data,
        isWorking: false
      });
    case FETCH_PIS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isWorking: false
      });


    default:
      return state;
  }
}

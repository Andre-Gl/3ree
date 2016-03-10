import * as types from '../constants/ActionTypes';
import request from 'superagent';

const pisUrl = 'http://qa-11-www.edmunds.com/api/pis/v1/cognito:us-east-1:00003b22-f370-4ba5-aedf-a3338764ce64/vins';

export function setUserId(userId) {
  return {
    type: types.SET_USER_ID,
    userId
  };
}

export function syncIdm(identifier) {
  console.log('Sync Idm', identifier);
  return dispatch => {
    dispatch(syncIdmRequest(identifier));

    return request
      .get(pisUrl)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(syncIdmFailure(err, identifier));
        } else {
          dispatch(syncIdmSuccess(res.body));
        }
      });
  };
}

export function syncIdmRequest(identifier) {
  console.log('Sync Idm Request', identifier);
  return {
    type: types.SYNC_IDM_REQUEST,
    identifier
  };
}

export function syncIdmSuccess(data) {
  console.log('Sync Idm Success', data);
  return {
    type: types.SYNC_IDM_SUCCESS,
    data
  };
}

export function syncIdmFailure(error, identifier) {
  return {
    type: types.SYNC_IDM_FAILURE,
    error
  };
}

export function fetchPIS(search) {
  console.log('Sync Idm', search);
  return dispatch => {
    dispatch(fetchPISRequest(search));

    return request
      .get(pisUrl)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(fetchPISFailure(err, search));
        } else {
          dispatch(fetchPISSuccess(res.body));
        }
      });
  };
}

export function fetchPISRequest(search) {
  console.log('Sync Idm Request', search);
  return {
    type: types.FETCH_PIS_REQUEST,
    search
  };
}

export function fetchPISSuccess(data) {
  console.log('Sync Idm Success', data);
  return {
    type: types.FETCH_PIS_SUCCESS,
    data
  };
}

export function fetchPISFailure(error, search) {
  return {
    type: types.FETCH_PIS_FAILURE,
    error
  };
}
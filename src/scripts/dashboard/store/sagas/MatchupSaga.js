import { call, fork, put, take } from 'redux-saga/effects';
import { matchupActions } from './../actions/MatchupsActions';
import RequestService from './../../../shared/utitlity/restUtils';
import API_ENDPOINTS from './../../../../config/apiEndpoints';

function* LoadMatchups(data) {
  try {
    let url = API_ENDPOINTS.formatUrl(API_ENDPOINTS.getMatchups,'CBB');
    const matchupData = yield call(RequestService.fetch,url);
    yield put(matchupActions.loadMatchupFulfilled(matchupData));
    
  }
  catch (error) {
    yield put(matchupActions.loadMatchupFailed(error));
  }
}



//=====================================
//  WATCHERS
//-------------------------------------

function* watchLoadMatchups() {
  while (true) {
    let { payload } = yield take(matchupActions.LOAD_MATCHUPS);
    yield fork(LoadMatchups, payload.data);
  }
}




//=====================================
//  AUTH SAGAS
//-------------------------------------

export const matchupSagas = [
  fork(watchLoadMatchups)
];

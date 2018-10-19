import { all } from 'redux-saga/effects'
import { matchupSagas } from './dashboard/store/sagas/MatchupSaga';


export default function* sagas() {
  yield all([
    ...matchupSagas
  ]);
}

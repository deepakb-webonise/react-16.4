
import { matchupActions } from '../actions/MatchupsActions';
import _ from 'lodash';

export const initialState = {
  isLoading: false,
  matchups: [],
  error : ''
};


export function matchupReducer(state = initialState, { type, payload }) {
  switch (type) {
    case matchupActions.LOAD_MATCHUPS: 
        return _.extend(state, {
                isLoading : true
            });
       
    case matchupActions.LOAD_MATCHUPS_FULFILLED:
        return _.extend(state, {
            isLoading : false,
            matchups : payload.matchups
        });

    case matchupActions.LOAD_MATCHUPS_FAILED:
        return _.extend(state, {
            isLoading : false,
            error : payload.error
        });

    default:
      return state;
  }
}

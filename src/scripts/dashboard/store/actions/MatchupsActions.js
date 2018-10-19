export const matchupActions = { 
    LOAD_MATCHUPS: 'LOAD_MATCHUPS',
    LOAD_MATCHUPS_FULFILLED: 'LOAD_MATCHUPS_FULFILLED',
    LOAD_MATCHUPS_FAILED: 'LOAD_MATCHUPS_FAILED',

    loadMatchups: data => ({
        type: matchupActions.LOAD_MATCHUPS,
        payload: {data}
    }),
  
    loadMatchupFulfilled: matchups => ({
        type: matchupActions.LOAD_MATCHUPS_FULFILLED,
        payload: { matchups }
    }),

    loadMatchupFailed: error => ({
        type: matchupActions.LOAD_MATCHUPS_FAILED,
        payload: {error}
    }),

};

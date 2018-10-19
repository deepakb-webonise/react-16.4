export const matchupsFacade = { 

    loadMatchups: data => ({
        type: matchupActions.LOAD_MATCHUPS,
        payload: {data}
    }),

};

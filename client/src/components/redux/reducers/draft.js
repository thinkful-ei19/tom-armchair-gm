import { FETCH_PLAYERS_REQUEST ,FETCH_PLAYERS_SUCCESS, FETCH_PLAYERS_ERROR, FILTER_PLAYERS_SUCCESS, SEARCH_PLAYERS_SUCCESS, UNDO_DRAFT_SUCCESS, DRAFT_PLAYER_SUCCESS, RESET_DRAFT_SUCCESS, } from '../actions/data';

const initialState = {
    players: [],
    filteredPlayers: [],
    draftedPlayers: [],
    loading: false,
    currentDraft: 0,
    fetchError: null,
    format: 'standard',
    query: '',
};

export const draftReducer = (state = initialState, action) => {
    if (action.type === FETCH_PLAYERS_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    } else if (action.type === FETCH_PLAYERS_SUCCESS) {
        return Object.assign({}, state, {
            players: action.players.rankings,
            filteredPlayers: action.players.rankings,
            loading: false,
            fetchError: null,
            currentDraft: 0

        });
    } else if (action.type === FETCH_PLAYERS_ERROR) {
        return Object.assign({}, state, {
            fetchError: null
        });
    } else if (action.type === SEARCH_PLAYERS_SUCCESS) {
        let players = state.players.filter(player =>
            player.Name.toUpperCase().includes(state.query.toUpperCase())
        );
        return Object.assign({}, state, {
            filteredPlayers: players,
            query: action.query,
        });
    } else if (action.type === DRAFT_PLAYER_SUCCESS) {
        return Object.assign({}, state, {
            currentDraft: state.currentDraft + 1,
            draftedPlayers: [...state.draftedPlayers, action.player],
            player: action.player.drafted = state.currentDraft + 1,
            query: '',

        }); 
    } else if (action.type === UNDO_DRAFT_SUCCESS) {
        const isDrafted = state.players.findIndex(players => players.drafted === state.currentDraft)
        return Object.assign({}, state, {
            currentDraft: state.currentDraft - 1,
            player: state.players[isDrafted].drafted = null,
            draftedPlayers: [...state.draftedPlayers - action.player],
            fetchError: null
        });
    } else if (action.type === RESET_DRAFT_SUCCESS) {
        const isDrafted = state.players.findIndex(players => players.drafted)
        return Object.assign({}, state, {
            currentDraft: state.currentDraft = 0,
            player: state.players[isDrafted].drafted = null,
            draftedPlayers: state.draftedPlayers = [],
            fetchError: null
        });
    } 
    console.log(action)
    return state;
}

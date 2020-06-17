import { RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_PENDING, RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_SUCCESS } from '../actions/characterSheetActions';
import { RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_ERROR } from './../actions/characterSheetActions';

const initialState = {
    retrievePending: false,
    sheets: [],
    retrieveError: null
}

export default function sheet(state = initialState, action) {
    switch (action.type) {
        // Retrieve sheets for curret user
        case RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_PENDING:
            return { ...state, fetchPending: true };
        case RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_SUCCESS:
            return { ...state, fetchPending: false, sheets: action.sheets };
        case RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_ERROR:
            return { ...state, fetchPending: false, error: action.error };
        default:
            return state;
    }
}
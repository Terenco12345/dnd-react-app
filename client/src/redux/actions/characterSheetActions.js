import axios from 'axios';

export const RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_PENDING = "RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_PENDING";
export const RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_SUCCESS = "RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_SUCCESS";
export const RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_ERROR = "RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_ERROR";

// Redux thunks
// Thunks for retrieveCharacterSheetsForCurrentUser
const retrieveCharacterSheetsForCurrentUserActionCreator = {
    pending: ()=>{
        return {
            type: RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_PENDING
        }
    },
    success: (sheets)=>{
        return {
            type: RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_SUCCESS,
            sheets
        }
    },
    error: ()=>{
        return {
            type: RETREIVE_CHARACTER_SHEETS_FOR_CURRENT_USER_ERROR
        }
    }
}

export function retrieveCharacterSheetsForCurrentUser(){
    return dispatch => {
        dispatch(retrieveCharacterSheetsForCurrentUserActionCreator.pending())
        axios({
            method: 'get',
            url: process.env.REACT_APP_SERVER_IP + '/character-sheet/all',
            withCredentials: true
        }).then((res) => {
            if (res.error) {
                throw (res.error);
            }
            dispatch(retrieveCharacterSheetsForCurrentUserActionCreator.success(res.data));
        }).catch((err) => {
            if (err) {
                dispatch(retrieveCharacterSheetsForCurrentUserActionCreator.error(err));
            }
        });
    }
}
import {createStore, Store} from "redux";
import {Action, StoreT} from "../utils/types";
import { MDNotesGroupsActions } from './actions';

export enum MD_NOTES_ACTIONS {
    ADD_NOTE = 'MD_NOTES/ADD_NOTE',
    RENAME_NOTE = 'MD_NOTES/RENAME_NOTE',
    REMOVE_NOTE = 'MD_NOTES/REMOVE_NOTE',

    ADD_GROUP = 'MD_NOTES/ADD_GROUP',
    RENAME_GROUP = 'MD_NOTES/RENAME_GROUP',
    REMOVE_GROUP = 'MD_NOTES/REMOVE_GROUP',
}

// @ts-ignore
export let store: Store<Array<any>> = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function reducer(state: StoreT = {
    groups: [], user: null
}, action: Action) {
    switch (action.type) {
        case MD_NOTES_ACTIONS.ADD_NOTE: return MDNotesGroupsActions.addNote(state, action);

        case MD_NOTES_ACTIONS.ADD_GROUP: return MDNotesGroupsActions.addGroup(state, action);

        case MD_NOTES_ACTIONS.RENAME_GROUP: return MDNotesGroupsActions.rename(state, action);

        default:
            console.log(`undefined action type: ${action.type}`)
            return state;
    }
}

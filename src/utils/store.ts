import {createStore, Store} from "redux";
import {Action, GroupT, StoreT} from "./types";

export enum MD_NOTES_ACTIONS {
    ADD_NOTE = 'MD_NOTES/ADD_NOTE',
    RENAME_NOTE = 'MD_NOTES/RENAME_NOTE',

    ADD_GROUP = 'MD_NOTES/ADD_GROUP',
    RENAME_GROUP = 'MD_NOTES/RENAME_GROUP',
}

export let store: Store<Array<any>> = createStore(reducer);

function reducer(state: StoreT = {
    groups: [], user: null
}, action: Action) {
    switch (action.type) {
        case MD_NOTES_ACTIONS.ADD_NOTE:
            return state
        case MD_NOTES_ACTIONS.RENAME_NOTE:
            return state
        case MD_NOTES_ACTIONS.ADD_GROUP:
            const {group, parentId} = action.payload;
            group.id = 'd' + Math.random();

            if (parentId) {
                state.groups.find((group: GroupT) => group.id === parentId).innerGroups.push(group);
            }

            state.groups = [...state.groups, group];
            console.log(state)
            return {...state};
        case MD_NOTES_ACTIONS.RENAME_GROUP:
            return
        default:
            console.log(`undefined action type: ${action.type}`)
            return state;
    }
}

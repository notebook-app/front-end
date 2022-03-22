import {createStore, Store} from "redux";
import {Action, GroupT, StoreT} from "./types";

export enum MD_NOTES_ACTIONS {
    ADD_NOTE = 'MD_NOTES/ADD_NOTE',
    RENAME_NOTE = 'MD_NOTES/RENAME_NOTE',

    ADD_GROUP = 'MD_NOTES/ADD_GROUP',
    RENAME_GROUP = 'MD_NOTES/RENAME_GROUP',
}

// @ts-ignore
export let store: Store<Array<any>> = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let key = 1;

function reducer(state: StoreT = {
    groups: [], user: null
}, action: Action) {
    switch (action.type) {
        case MD_NOTES_ACTIONS.ADD_NOTE:
            return {...state}
        case MD_NOTES_ACTIONS.RENAME_NOTE:
            return {...state}
        case MD_NOTES_ACTIONS.ADD_GROUP:
            const {group, parentId} = action.payload;
            group.id = 'd' + key;
            key++;

            if (parentId) {
                const parentGroup: GroupT = state.groups.find((group: GroupT) => group.id === parentId);
                parentGroup.innerGroups = [...parentGroup.innerGroups, group];

                return {
                    ...state,
                    groups: state.groups.map((group: GroupT) => group.id === parentId ? parentGroup : group)
                }
            }

            state.groups = [...state.groups, group];
            return {...state};
        case MD_NOTES_ACTIONS.RENAME_GROUP:
            return {...state}
        default:
            console.log(`undefined action type: ${action.type}`)
            return state;
    }
}

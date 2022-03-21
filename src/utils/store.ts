import {Action, createStore, Store} from "redux";

enum MD_NOTES_ACTIONS {
    ADD_NOTE = 'MD_NOTES/ADD_NOTE',
    RENAME_NOTE = 'MD_NOTES/RENAME_NOTE',

    ADD_GROUP = 'MD_NOTES/ADD_GROUP',
    RENAME_GROUP = 'MD_NOTES/RENAME_GROUP',
}

export let store: Store<Array<any>> = createStore(reducer);

function reducer(state = [], action: Action) {
    switch (action.type) {
        case MD_NOTES_ACTIONS.ADD_NOTE:
            return
        case MD_NOTES_ACTIONS.RENAME_NOTE:
            return
        case MD_NOTES_ACTIONS.ADD_GROUP:
            return
        case MD_NOTES_ACTIONS.RENAME_GROUP:
            return
        default:
            console.log(`undefined action type: ${action.type}`)
            return state;
    }
}

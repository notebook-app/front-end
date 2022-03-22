import {Action, GroupT, NoteT} from "../utils/types";
import {MD_NOTES_ACTIONS} from "../utils/store";

export default class MDNotesService {
    static addNote(groupId: string, note: NoteT): Action {
        return {
            type: MD_NOTES_ACTIONS.ADD_NOTE,
            payload: note
        } as Action;
    }

    static addGroup(group: GroupT, parentId?: string): Action {
        return {
            type: MD_NOTES_ACTIONS.ADD_GROUP,
            payload: {group, parentId}
        } as Action;
    }

    static renameGroup(groupId: string, newTitle: string): Action {
        return {
            type: MD_NOTES_ACTIONS.RENAME_GROUP,
            payload: {groupId, newTitle}
        }
    }
}
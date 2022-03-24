import {GroupT, NoteT} from "./types";

export const defaultNote: NoteT = {
    unFormattedContent: '',
    title: 'note',
    backgroundUrl: ''
}
export const defaultGroup: GroupT = {
    title: 'unnamed',
    innerGroups: [],
    notes: []
}

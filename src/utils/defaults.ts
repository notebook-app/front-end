import {GroupT, NoteT} from "./types";

export const defaultNote: NoteT = {
    unFormattedContent: '',
    title: '',
    backgroundUrl: ''
}
export const defaultGroup: GroupT = {
    title: 'unnamed',
    innerGroups: [],
    notes: []
}

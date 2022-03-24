import {GroupT, NoteT} from "./types";

export const defaultNote: NoteT = {
    id: `${Math.random()}`,
    unFormattedContent: '',
    title: 'note',
    backgroundUrl: ''
}
export const defaultGroup: GroupT = {
    title: 'unnamed',
    innerGroups: [],
    notes: []
}

import {Dispatch, SetStateAction} from 'react';

export type UserT = {
    name: string;
};

export type AuthUserT = {
    name: string;
    password: string;
};

export type NoteT = {
    id: string;
    title: string;
    unFormattedContent: string;
    backgroundUrl?: string;
};

export type GroupT = {
    readonly id: string;
    innerGroups: GroupT[];
    title: string;
    notes: NoteT[];
};

export type UserSetterT = Dispatch<SetStateAction<UserT>>;
export type HasAccountSetterT = Dispatch<SetStateAction<boolean>>;

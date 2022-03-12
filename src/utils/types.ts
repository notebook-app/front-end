import { Dispatch, SetStateAction } from 'react';
export type UserT = {
    name: string;
};

export type AuthUserT = {
    name: string;
    password: string;
};
export type UserSetterT = Dispatch<SetStateAction<UserT>>;
export type HasAccountSetterT = Dispatch<SetStateAction<boolean>>;

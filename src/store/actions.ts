import {Action, GroupT, StoreT} from "../utils/types";

export class MDNotesGroupsActions {
    public static rename(state: StoreT, action: Action): StoreT{
        const {groupId, newTitle} = action.payload;
        const groupToRename: GroupT = state.groups.find((group: GroupT) => group.id === groupId);
        const isNested: boolean = !Boolean(groupToRename);

        if (!isNested) {
            groupToRename.title = newTitle;
            state.groups = state.groups.map(group => group.id === groupId ? groupToRename : group);

            return {...state}
        }

        for (const group of state.groups) {
            for (const nestedGroup of group.innerGroups) {
                if (nestedGroup.id === groupId) {
                    nestedGroup.title = newTitle;
                }
            }
        }

        return {...state}
    }

    public static addNote(state: StoreT, action: Action): StoreT {
        const parentGroup: GroupT = state.groups.find((group: GroupT) => group.id === action.payload.groupId);
        parentGroup.notes = [...parentGroup.notes, action.payload.note];

        return {...state, groups: state.groups.map(group => group.id === action.payload.groupId ? parentGroup : group)}
    }

    public static addGroup(state: StoreT, action: Action): StoreT {
        const {group, parentId} = action.payload;
        group.id = `${Math.random()}`;

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
    }
}

export class MDNotesActions {}
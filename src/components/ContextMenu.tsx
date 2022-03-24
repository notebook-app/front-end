import MDNotesService from "../services/MDNotesService";
import {store} from "../store/store";
import {defaultGroup, defaultNote} from "../utils/defaults";

type ContextMenuOptionT = {
    readonly id: string;
    title: string;
    action?: Function
}

type ContextMenuGroupT = {
    readonly id: string;
    readonly on: string;
    options: ContextMenuOptionT[];
}

function findContext(target: HTMLElement): HTMLElement {
    if (target.hasAttribute('data-note-id') || target.hasAttribute('data-group-id')) {
        return target;
    }

    return target.parentElement;
}

const optionsOnNotesGroup: ContextMenuGroupT = {
    id: 'diu2hd',
    on: 'group',
    options: [
        {
            id: 'tsd23ed',
            title: 'Rename',
            action: ({groupId}) => {
                const groupElement: HTMLDivElement = document.querySelector(`[data-group-id="${groupId}"]`);
                const actualGroupName: string = groupElement.getAttribute('data-group-title');

                document.querySelectorAll('.new-title-input').forEach((input) => {
                    input.remove();
                });

                const input: HTMLInputElement = document.createElement('input');
                input.classList.add('new-title-input');
                input.value = actualGroupName;

                input.addEventListener('keyup', (ev: KeyboardEvent) => {
                    if (ev.key === 'Enter') {
                        const titleElement: HTMLSpanElement = document.createElement('span');
                        const newTitle: string = input.value;

                        titleElement.classList.add('group-title');

                        titleElement.innerText = newTitle;

                        groupElement.setAttribute('data-group-title', newTitle);
                        input.replaceWith(titleElement)
                        store.dispatch(MDNotesService.renameGroup(groupId, newTitle));
                    }
                });

                groupElement.querySelector('.group-title').replaceWith(input);
                input.focus();
            }
        },
        {
            id: 'teasa',
            title: 'New note',
            action: ({ groupId }) => {
                store.dispatch(MDNotesService.addNote(groupId, defaultNote));
            }
        },
        {
            id: 'tsad',
            title: 'New group',
            action: ({ groupId }) => {
                store.dispatch(MDNotesService.addGroup(defaultGroup, groupId));
            }
        }
    ],
};

const optionsOnSingleNote: ContextMenuGroupT = {
    id: 'tab45esa',
    on: 'note',
    options: [
        {
            id: 'tes',
            title: 'Rename',
            action: () => {
            }
        },
    ],
}

function createContextMenu(options: ContextMenuGroupT, target: HTMLElement, {x, y}): HTMLDivElement {
    const contextMenu = document.createElement('div');
    contextMenu.classList.add('absolute', 'h-[150px]', 'w-[100px]', 'color-white', 'context-menu');

    for (const option of options.options) {
        const optionEl: Element = document.createElement('div');
        optionEl.innerHTML = option.title;
        optionEl.addEventListener('click', () => {
            const noteId: string = target.getAttribute('data-note-id');
            const groupId: string = target.getAttribute('data-group-id');
            const payload = {noteId, groupId};
            option.action(payload);
        });
        contextMenu.appendChild(optionEl);
    }

    contextMenu.style.top = `${y}px`
    contextMenu.style.left = `${x}px`

    return contextMenu;
}

function removeOldContextMenus(): void {
    const contextMenu: HTMLDivElement | undefined = document.querySelector('.context-menu');
    if (contextMenu) {
        contextMenu.remove();
    }
}

document.addEventListener('click', () => {
    removeOldContextMenus()
});

document.addEventListener('mousemove', ({x, y}) => {
    document.addEventListener('contextmenu', (e: MouseEvent) => {
        let contextMenu: HTMLDivElement | undefined = document.querySelector('.context-menu');

        if (contextMenu) {
            contextMenu.remove();
        }

        const context: HTMLElement = findContext(e.target as HTMLElement);
        const isNote: boolean = context.hasAttribute('data-note-id');
        const isGroup: boolean = context.hasAttribute('data-group-id');

        if (!isNote && !isGroup) {
            return;
        }

        e.preventDefault();

        contextMenu = createContextMenu(isNote ? optionsOnSingleNote : optionsOnNotesGroup, context, { x, y });

        document.body.appendChild(contextMenu);
    });
});

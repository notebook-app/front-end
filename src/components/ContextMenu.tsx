import MDNotesService from "../services/MDNotesService";
import {store} from "../utils/store";

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
            action: () => {
            }
        },
        {
            id: 'teasa',
            title: 'New note',
            action: () => {
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
                store.dispatch(MDNotesService.addNote('dhuiy721udea', {id: 'dsa', title: '', unFormattedContent: ''}))
            }
        },
    ],
}

function createContextMenu(options: ContextMenuGroupT, {x, y}): HTMLDivElement {
    const contextMenu = document.createElement('div');
    contextMenu.classList.add('absolute', 'h-[150px]', 'w-[100px]', 'color-white', 'context-menu');

    for (const option of options.options) {
        const optionEl: Element = document.createElement('div');
        optionEl.innerHTML = option.title;
        optionEl.addEventListener('click', () => {
            option.action()
        })
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
        e.preventDefault();
        let contextMenu: HTMLDivElement | undefined = document.querySelector('.context-menu');

        if (contextMenu) {
            contextMenu.remove();
        }

        const context: HTMLElement = findContext(e.target as HTMLElement);
        const isNote: boolean = context.hasAttribute('data-note-id');
        contextMenu = createContextMenu(isNote ? optionsOnSingleNote : optionsOnNotesGroup, {x, y});

        document.body.appendChild(contextMenu);
    });
});

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

function getTarget(target: HTMLElement): HTMLElement {
    if (target.getAttribute('data-note-id')) {
        return target;
    }

    if (target.getAttribute('data-group-id')) {
        return target;
    }

    while (!target.getAttribute('data-group-id')) {
        target = target.parentElement;
    }

    return target;
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

        const target: HTMLElement = getTarget(e.target as HTMLElement);

        if (target.classList.contains(''))

            document.body.appendChild(contextMenu);
    });
});

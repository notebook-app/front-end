import React, {useState} from 'react';
import Nav from "../components/layout/Nav";

function waitForElement(selector: string): Promise<Element | null> {
    return new Promise((resolve, reject) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                return resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {childList: true, subtree: true});
    });
}

interface StickyNoteColor {
    readonly id: string;
    readonly hex: string;
}

interface StickyNote {
    readonly id: string;
    title: string;
    description: string;
    date: number;
    isFavourite: boolean;
    color: StickyNoteColor;
}

const colors: StickyNoteColor[] = [
    {id: 'color:light-yellow', hex: '#f9c978'},
    {id: 'color:oceanic', hex: '#94d2bd'},
    {id: 'color:pink', hex: '#ff758f'},
    {id: 'color:blue', hex: '#c3d1f6'},
    {id: 'color:light-ping', hex: '#f0b9c4'},
];

function StickyNote({
                        color,
                        title,
                        description,
                        id,
                        date,
                        isFavourite,
                    }: StickyNote) {
    return (
        <div
            className={
                'w-52 h-52 rounded-sm p-1 relative float-left ml-10 mt-10'
            }
            style={{background: color.hex}}
            data-note-id={id}
        >
            <div
                className={`favourite-star bg-gray-800 rounded w-6 h-6 text-center justify-center absolute right-1 transition-opacity delay-[50ms] cursor-pointer ${
                    !isFavourite ? 'opacity-0' : ''
                }`}
                onMouseEnter={(ev) =>
                    ((ev.target as HTMLDivElement).style.opacity = '1')
                }
                onMouseLeave={(ev) =>
                    ((ev.target as HTMLDivElement).style.opacity = '0')
                }
            >
                <i
                    className={`fa-solid fa-star ${
                        isFavourite ? 'text-yellow-400' : 'text-white'
                    }`}
                    onMouseEnter={(ev) =>
                        ((
                            ev.target as HTMLDivElement
                        ).parentElement!.style.opacity = '1')
                    }
                    onMouseLeave={(ev) =>
                        ((
                            ev.target as HTMLDivElement
                        ).parentElement!.style.opacity = '0')
                    }
                />
            </div>
            <div
                contentEditable
                spellCheck={false}
                tabIndex={-1}
                className={'note-title text-2xl font-light focus:outline-none'}
            >
                {title}
            </div>
            <div
                contentEditable
                spellCheck={false}
                tabIndex={0}
                className={'focus:outline-none font-light '}
            >
                {description}
            </div>
            <div className={'absolute bottom-0'}>
                {new Date(date).toLocaleDateString()}
            </div>
        </div>
    );
}

export default function StickyNotesView() {
    const [notes, setNotes] = useState<Array<StickyNote>>([]);

    return (
        <section className={'view-with-standard-nav'}>
            <Nav/>
            <div className={'w-full h-[70px] p-2 '}>
                <span className={'text-2xl text-red-300'}>Hello, user</span>
                <span className={'absolute right-0 p-2 w-fit'}>
                    {colors.map((color: StickyNoteColor) => {
                        return (
                            <span
                                key={color.id}
                                style={{background: color.hex}}
                                className={
                                    'w-5 h-5 ml-2 cursor-pointer rounded-full inline-block'
                                }
                                onClick={async () => {
                                    const id: string = `${Date.now()}`;
                                    const note: StickyNote = {
                                        id: `${Date.now()}`,
                                        date: Date.now(),
                                        color,
                                        title: '',
                                        description: '',
                                        isFavourite: false,
                                    };
                                    setNotes([...notes, note]);
                                    (
                                        (await waitForElement(
                                            `div[data-note-id="${id}"] .note-title`
                                        )) as HTMLDivElement
                                    )?.focus();
                                }}
                            />
                        );
                    })}
                </span>
            </div>
            <div className={'text-3xl pl-2'}>Notes</div>
            <div className={'p-2'}>
                {notes.map((note: StickyNote) => {
                    return <StickyNote {...note} key={note.id}/>;
                })}
            </div>
        </section>
    );
}

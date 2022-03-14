import React from "react";
import Nav from "../components/layout/Nav";
import {ActiveNoteSetterT, NoteT} from "../utils/types";

type Props = {
    notes: NoteT[];
    setActiveNote: ActiveNoteSetterT
}

export default function NotesView({notes, setActiveNote}: Props): JSX.Element {
    return (
        <section className={'view-with-standard-nav'}>
            <Nav>
                <>
                    <span className={'text-small'}>Your notes:</span>
                    {
                        notes.map((note: NoteT) =>
                            <div className={"hover:text-blue-500 cursor-pointer"} onClick={() => setActiveNote(note)}>
                                {note.title}
                            </div>
                        )
                    }
                </>
            </Nav>

        </section>
    );
}

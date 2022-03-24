import React from "react";
import Nav from "../components/layout/Nav";
import {GroupT, NoteT, StoreT} from "../utils/types";
import {useDispatch, useSelector} from "react-redux";
import MDNotesService from "../services/MDNotesService";
import {defaultGroup} from "../utils/defaults";

export default function NotesView(): JSX.Element {
    const groups: Array<GroupT> = useSelector((state: StoreT) => state.groups);
    const dispatch = useDispatch();

    function showOrHideGroup(groupId: string): void {
        const target: Element = document.querySelector(`div[data-group-id="${groupId}"] .notes`);
        target.classList.toggle('hidden');
        target.classList.toggle('block');
        (target.parentElement.firstChild as HTMLElement).classList.toggle('fa-angle-down');
        (target.parentElement.firstChild as HTMLElement).classList.toggle('fa-angle-right');
    }

    function Note({note}: { note: NoteT }): JSX.Element {
        return (
            <div data-note-id={note.id} className={'cursor-pointer note'}>
                <span>{note.title}</span>
            </div>
        )
    }

    function Group({group}: { group: GroupT }) {
        return (
            <div className={`ml-[0.5rem] block`} data-group-id={group.id} key={group.id}
                 data-group-title={group.title}>
                <i className="fa-solid fa-angle-down float-left text-gray-500 text-sm cursor-pointer"
                   onClick={() => showOrHideGroup(group.id)}/>
                <span className={"group-title"} onClick={() => showOrHideGroup(group.id)}>{group.title}</span>
                <span className={"text-gray-500 float-right"}>{group.notes.length}</span>
                <div className="notes">
                    {
                        group.innerGroups.map((group: GroupT) =>
                            <Group key={group.id} group={group}/>)
                    }
                    {
                        group.notes.map((note: NoteT) => <Note note={note} key={note.id}/>)
                    }
                </div>
            </div>
        )
    }

    return (
        <section className={'view-with-standard-nav flex'}>
            <Nav>
                <>
                    <div>
                        <div
                            id={"notebooks"}
                            className={"text-center rounded-r-sm"}
                        >
                            <i className="fa-solid fa-book"/>
                            {' Notebooks'}
                            <i
                                className="fa-solid fa-plus float-right mt-1 cursor-pointer"
                                onClick={() => {
                                    const newGroup: GroupT = Object.assign({}, defaultGroup);
                                    dispatch(MDNotesService.addGroup(newGroup));
                                }}
                            />
                        </div>
                        <div className={'ml-[.5rem]'}>
                            {
                                groups.map((group: GroupT) => {
                                    return <Group key={group.id} group={group}/>
                                })
                            }
                        </div>
                    </div>
                </>
            </Nav>

            <aside>

            </aside>

            <section>
            </section>
        </section>
    );
}

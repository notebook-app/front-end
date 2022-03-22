import React, {useEffect, useState} from 'react';
import {UserSetterT, UserT} from 'utils/types';
import {Login} from 'components/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StickyNotesView from "./views/StickyNotesView";
import NotesView from "./views/NotesView";

function MainView({user, setUser}: { user: UserT, setUser: UserSetterT }) {
    return (
        <>
            <main className="flex justify-center items-center w-screen h-screen">
                {user.name ? (
                    <h1>Hello, {user.name} </h1>
                ) : (
                    <Login setUser={setUser}/>
                )}
            </main>
        </>
    )
}

export default function App() {
    const [user, setUser] = useState<UserT>({name: ''});
    useEffect(() => {
        // grab from localstorage if exists
    }, []);

    return (
        <div className="flex h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<MainView user={user} setUser={setUser}/>}/>
                    <Route path={'/sticky-notes'} element={<StickyNotesView/>}/>
                    <Route path={'/notes'} element={<NotesView/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

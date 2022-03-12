import React, { useEffect, useState } from 'react';
import { UserT } from 'utils/types';
import Nav from './components/layout/Nav';
import { Login } from 'components/Login';

export default function App() {
    const [user, setUser] = useState<UserT>({ name: '' });
    useEffect(() => {
        // grab from localstorage if exists
    }, []);

    return (
        <div className="flex h-screen">
            <Nav />
            <main className="flex justify-center items-center w-screen h-screen">
                {user.name ? (
                    <h1>Hello, {user.name} </h1>
                ) : (
                    <Login setUser={setUser} />
                )}
            </main>
        </div>
    );
}

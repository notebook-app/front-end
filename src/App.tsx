import { RegisterForm } from 'components/RegisterForm';
import React, { useEffect, useState } from 'react';
import { UserT } from 'utils/types';
import Nav from './components/layout/Nav';

export default function App() {
    const [user, setUser] = useState<UserT>({ name: '' });
    useEffect(() => {
        // grab from localstorage if exists
    }, []);

    return (
        <div className="flex h-screen">
            <Nav />
            <main className="flex justify-center items-center w-screen h-screen">
                {user.name ? <div>T</div> : <RegisterForm user={user} />}
            </main>
        </div>
    );
}

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import sendLoginRequest from 'utils/sendLoginRequest';
import { UserSetterT } from 'utils/types';

type Props = {
    setUser: UserSetterT;
};

export const LoginForm = ({ setUser }: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = {
            name: username,
            password: password,
        };

        const loggedIn = await sendLoginRequest(user);

        if (loggedIn) setUser({ name: username });
    };

    return (
        <div className="h-screen grid place-items-center">
            <form
                className="flex flex-col gap-2 border border-gray-500 px-10 py-8"
                onSubmit={(e) => handleLogin(e)}
            >
                <h3 className="text-center text-xl">Log in</h3>
                <label className="label" htmlFor="username">
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    className="input"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className="label" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    className="input"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className=" flex flex-col items-center gap-4 ">
                    <input
                        type="submit"
                        value="Log in"
                        className="rounded-md bg-blue-700 w-1/3 mt-4  text-white cursor-pointer py-1"
                    />
                    {/* <p className="text-sm">Forgot your password? </p> */}
                </div>
            </form>
        </div>
    );
};

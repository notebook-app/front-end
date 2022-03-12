import React, { useState } from 'react';
import sendRegisterRequest from 'utils/sendRegisterRequest';
import { HasAccountSetterT } from 'utils/types';

type Props = {
    setHasAccount: HasAccountSetterT;
};

export const RegisterForm = ({ setHasAccount }: Props) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = {
            name: username,
            password: password,
        };

        const registered = await sendRegisterRequest(user);

        if (registered) {
            setHasAccount(true);
        }
    };

    return (
        <div className="h-screen grid place-items-center">
            <form
                className="flex flex-col gap-2 border border-gray-500 p-10"
                onSubmit={(e) => handleRegister(e)}
            >
                <h3 className="text-center text-xl">Create your account</h3>
                <label className="label" htmlFor="username">
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    className="input"
                    onChange={(e) => setUserName(e.target.value)}
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
                        value="Register"
                        className="rounded-md bg-blue-700 w-1/3  text-white cursor-pointer py-1"
                    />
                    <p className="text-sm">
                        Have an account?{' '}
                        <span className="text-blue-700 cursor-pointer">
                            <button onClick={() => setHasAccount(true)}>
                                Sign in
                            </button>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

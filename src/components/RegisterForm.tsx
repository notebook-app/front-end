import React from 'react';
import { UserT } from 'utils/types';

type PropsT = {
    user: UserT;
};

export const RegisterForm = ({ user }: PropsT) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <form
            className="flex flex-col gap-2 w-1/4 border border-gray-500 p-10"
            onSubmit={(e) => handleSubmit(e)}
        >
            <label className="label" htmlFor="username">
                Username
            </label>
            <input type="text" name="username" className="input" />
            <label className="label" htmlFor="password">
                Password
            </label>
            <input type="password" name="password" className="input" />
            <input
                type="submit"
                value="Register"
                className="rounded-md bg-blue-700 w-1/3 mx-auto text-white  py-1"
            />
        </form>
    );
};

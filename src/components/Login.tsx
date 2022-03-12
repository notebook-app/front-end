import React, { useState } from 'react';
import { LoginForm } from 'components/LoginForm';
import { RegisterForm } from 'components/RegisterForm';
import { UserSetterT } from 'utils/types';

type Props = {
    setUser: UserSetterT;
};

export const Login: React.FC<Props> = ({ setUser }) => {
    const [hasAccount, setHasAccount] = useState(false);
    return (
        <>
            {hasAccount ? (
                <LoginForm setUser={setUser} />
            ) : (
                <RegisterForm setHasAccount={setHasAccount} />
            )}
        </>
    );
};

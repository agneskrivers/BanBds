import React, { createContext, FunctionComponent, useState } from 'react';

// Interfaces
import type { IUserInfoForUser, IUserUpdateInfo } from '@interfaces';

// Interface
interface ContextInterface {
    user: IUserInfoForUser | null;

    onLogin(data: IUserInfoForUser): void;
    onLogout(): void;
    onUpdateUser(data: IUserUpdateInfo): void;
}

// Props
interface Props {
    children: React.ReactNode;
}

// Context Default
const contextDefault: ContextInterface = {
    user: null,

    onLogin() {
        console.log('Login');
    },
    onLogout() {
        console.log('Logout');
    },
    onUpdateUser() {
        console.log('Update User');
    },
};

export const Context = createContext<ContextInterface>(contextDefault);

const Index: FunctionComponent<Props> = ({ children }) => {
    // States
    const [user, setUser] = useState<IUserInfoForUser | null>(null);

    // Handles
    const handleLogin = (data: IUserInfoForUser) => setUser(data);
    const handleLogout = () => setUser(null);
    const handleUpdateUser = (data: IUserUpdateInfo) => {
        if (user) {
            const { address, avatar, birthday, fullName } = data;

            let updateUser = user;

            if (address) {
                updateUser = { ...updateUser, address };
            }

            if (birthday) {
                updateUser = { ...updateUser, birthday };
            }

            if (avatar) {
                updateUser = { ...updateUser, avatar };
            }

            if (fullName) {
                updateUser = { ...updateUser, fullName };
            }

            setUser(updateUser);
        }
    };

    const value: ContextInterface = {
        user,

        onLogin: handleLogin,
        onLogout: handleLogout,
        onUpdateUser: handleUpdateUser,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Index;

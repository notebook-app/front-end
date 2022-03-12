import { AuthUserT } from './types';
export default async function sendLoginRequest(user: AuthUserT) {
    const res = await fetch('authendpointgoeshere', {
        method: 'POST',
        body: JSON.stringify(user),
    });
    if (res.status === 200) {
        localStorage.addItem('notebook-loggedin', 'true');
        return true;
    }
}

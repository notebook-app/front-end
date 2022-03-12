import { AuthUserT } from './types';
export default async function sendRegisterRequest(user: AuthUserT) {
    const res = await fetch('registerendpointgoeshere', {
        method: 'POST',
        body: JSON.stringify(user),
    });
    if (res.status === 200) {
        return true;
    }
}

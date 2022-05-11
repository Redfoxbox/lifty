import env from './config/env.js';
import jwt_decode from "jwt-decode";
export const httpClient = () => {
    const { token } = JSON.parse(localStorage.getItem('auth')) || {};
    return { Authorization: `Bearer ${token}` };
};

export const authProvider = {
    // authentication
    login: ({ username, password }) => {
        const request = new Request(
            env.REACT_APP_API_URL + '/users/login',
            {
                method: 'POST',
                body: JSON.stringify({ email: username, password }),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            }
        );
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((auth) => {
                const data = jwt_decode(auth.token);
                localStorage.setItem(
                    'auth',
                    JSON.stringify({ ...auth, fullName: username })
                );
                localStorage.setItem('permission', data.role);
            })
            .catch(() => {
                throw new Error('Network error');
            });
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            localStorage.removeItem('permission');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('auth')
            ? Promise.resolve()
            : Promise.reject({ message: 'login required' }),
    logout: () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('permission');
        return Promise.resolve();
    },
    getIdentity: () => {
        try {
            const { id, fullName, avatar, role } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, fullName, avatar, role });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: () => {
        const  role = localStorage.getItem('permission');
        console.log(role);
        return role ? Promise.resolve(role) : Promise.reject();
    }
};
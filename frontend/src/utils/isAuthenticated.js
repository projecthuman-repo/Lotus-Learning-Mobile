
import decode from 'jwt-decode';

const isAuthenticated = () => {
    const token = window.localStorage.getItem("token");

    try {
        decode(token);
    } catch (err) {
        return false;
    }

    return true;

};

export default isAuthenticated;

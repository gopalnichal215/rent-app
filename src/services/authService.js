export function register(user) {
    const currentUsers = JSON.parse(localStorage.getItem("users"));
    currentUsers.push(user);
    localStorage.setItem("users", JSON.stringify(currentUsers));
}

export function login(user) {
    const users = JSON.parse(localStorage.getItem("users"));
    const currentUser = users.filter(x => x.userName == user.userName && x.password == user.password);
    if (currentUser.length > 0) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        return true;
    }

    return false;
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

export function logout() {
    localStorage.setItem("currentUser", "");
}

export default {
    register,
    login,
    getCurrentUser,
    logout
}
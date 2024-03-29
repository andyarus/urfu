import axios from "axios";  

const userApi = {
    createUser: (data) => {
        return axios.post("/users/", {
            user_name: data.user_name,
            email: data.email,
            password: data.password,
        });
    },
    loginUser: (data) =>
        axios.post("/users/login/", {
            email: data.email,
            password: data.password,
        }),
    getUser: (id) => {
        return axios.get("/users/" + id);
    },
    getMe: () => {
        return axios.get("/users/me", { headers: { token: window.localStorage.token } });
    },
};
export default userApi;

const userActions = {
    setUserLogin: () => ({
        type: "USER:LOGIN",
    }),
    setUserLogout: () => ({
        type: "USER:LOGOUT",
    }),
    setFormStatus: (status) => ({
        type: "SET_FORM_STATUS",
        payload: status,
    }),
};

export default userActions;

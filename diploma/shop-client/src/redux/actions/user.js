const userActions = {
    setUserLogin: (userInfo) => ({
        type: "USER:LOGIN",
        payload: userInfo,
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


const initialState = {
    isAuth: false,
    isAdmin: false,
    formStatus: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "USER:LOGIN":
            return {
                ...state,
                isAdmin: action.payload.email === "admin",
                isAuth: true,
            };
        case "USER:LOGOUT":
            return {
                ...state,
                isAdmin: false,
                isAuth: false,
            };
        case "SET_FORM_STATUS":
            return {
                ...state,
                formStatus: action.payload,
            };

        default:
            return state;
    }
};

const initialState = {
    isAuth: true,
    formStatus: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "USER:LOGIN":
            return {
                ...state,
                isAuth: true,
            };
        case "USER:LOGOUT":
            return {
                ...state,
                isAuth: false,
            };
        case "SET_FORM_STATUS":
            return {
                ...state,
                formStatus: action.payload
            };

        default:
            return state;
    }
};

import React, { useEffect } from "react";
import userActions from "../../redux/actions/user";

import { useDispatch } from "react-redux";

function FormLayout({ children }) {
    const dispatch = useDispatch();
    const closeForm = () => {
        dispatch(userActions.setFormStatus(false));
    };
    useEffect(() => {
        document.querySelector("body").classList.toggle("form-open");
        return () => {
            document.querySelector("body").classList.toggle("form-open");
        };
    }, []);
    return (
        <>
            <div className="overlay" onClick={closeForm}></div>
            {children}
        </>
    );
}

export default FormLayout;

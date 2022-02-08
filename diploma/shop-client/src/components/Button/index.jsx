import React from "react";

import "./Button.scss";

function Button({ onClick, children }) {
    return <div onClick={onClick}>{children}</div>;
}

export default Button;

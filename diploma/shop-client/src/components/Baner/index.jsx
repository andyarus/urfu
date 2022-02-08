import React from "react";

import baner from '../../assets/sitebaner.png'

import "./Baner.scss";

function Baner() {
    return (
        <section className="baner">
            <img className="baner__img" src={baner} alt="" />
        </section>
    );
}

export default Baner;

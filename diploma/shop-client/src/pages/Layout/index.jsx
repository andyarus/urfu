import React from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";

import FormLayout from "../FormLayout";
import Login from "../Login";
import Registration from "../Registration";
import Feedback from "../Feedback";

import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";

const openForm = (formStatus) => {
    if (formStatus === "login") {
        return (
            <FormLayout>
                <Login />
            </FormLayout>
        );
    }
    if (formStatus === "register") {
        return (
            <FormLayout>
                <Registration />
            </FormLayout>
        );
    }
    if (formStatus === "feedback") {
        return (
            <FormLayout>
                <Feedback />
            </FormLayout>
        );
    }
};

function Layout({ children, searchInfo }) {
    const formStatus = useSelector(({ user }) => {
        return user.formStatus;
    });
    return (
        <>
            {openForm(formStatus)}
            <div className={classnames({ "page-style": formStatus })}>
                <TopMenu searchInfo={searchInfo} />
                {children}
                <Footer />
            </div>
        </>
    );
}

export default Layout;

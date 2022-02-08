import React from "react";

import Logo from "../Logo";
import Search from "../Search";
import Navigation from "../Navigation";
import Button from "../Button";

import "./TopMenu.scss";

function TopMenu() {
    const handleClickQuestion = () => {
        console.log("handleClickQuestion");
    };
    const handleClickEnter = () => {
        console.log("handleClickEnter");
    };
    return (
        <div>
            <div>
                TopMenu:
                <Logo />
                <Search />
                <Button onClick={handleClickQuestion}> Задать вопрос </Button>
                <Button onClick={handleClickEnter}> Войти </Button>
            </div>
            <Navigation />
        </div>
    );
}

export default TopMenu;

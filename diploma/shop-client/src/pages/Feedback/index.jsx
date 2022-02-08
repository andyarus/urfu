import React from "react";
import Button from "../../components/Button";

function Feedback() {
    const onSend = () => {
        console.log("Отправить");
    };
    const onСancel = () => {
        console.log("Я передумал");
    };
    return (
        <div>
            Задать вопрос
            <Button onClick={onSend}>Отправить</Button>
            <Button onClick={onСancel}>Я передумал</Button>
        </div>
    );
}

export default Feedback;

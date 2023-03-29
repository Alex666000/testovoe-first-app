import React, {useState} from "react";
import Modal from "react-modal";
import BasicButton from "../BasicButton";
import {Block} from "../../styled-components/common";
import {StateType} from "../../App";

type CustomModalPropsType = {
    isOpen: boolean
    changeStateInputValue: (value: string) => void
}


export const CustomModal = (props: CustomModalPropsType) => {

    const customStyles = {
        content: {
            // позиционирование по центру
            top: "10%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            // размеры
            width: "200px",
            height: "50px",
        },
    }

    const [inputValue, setInputValue] = useState("");



    const changeInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        props.changeStateInputValue(e.target.value)
    }



    return (
        <Modal isOpen={props.isOpen} style={customStyles}>
            <Block flexDirection={"column"} justifyContent>
                Введите текст вопроса
                <input value={inputValue} onChange={props.changeInputValueHandler}/>
                <Block justifyContent={"flex-end"}>
                    <BasicButton text={"ok"}/>
                    <BasicButton text={"cancel"}/>
                </Block>
            </Block>

        </Modal>
    );
};

export default CustomModal;
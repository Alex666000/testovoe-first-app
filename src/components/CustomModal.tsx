import React, {FC, useState} from "react";
import Modal from "react-modal";

type CustomModalPropsType = {
    isOpen: boolean
    submitInputValue: (value: string) => void
    cancelHandler: () => void
}

export const CustomModal: FC<CustomModalPropsType> = ({isOpen, submitInputValue, cancelHandler}) => {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false);

    const changeInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)

    }
    // в любой модалке всегда есть submit
    // добавим валидацию
    const submitValue = () => {
        if (error) {
            setError(false)
            return
        }
        if (inputValue && !error) {
            submitInputValue(inputValue)
            setInputValue("")
            setError(false)
        }
        setError(true)
    }

    const closeOnCancel = () => {
        cancelHandler()
    }

    return (
        <Modal isOpen={isOpen} style={customStyles}>
            {!error ?
                <div>
                    <div>Введите текст вопроса</div>
                    <input value={inputValue} onChange={changeInputValueHandler}/>
                </div>
                : <div>
                    Вы не ввели вопрос
                </div>
            }

            <div>
                <button onClick={submitValue}>ok</button>
                {!error && <button onClick={closeOnCancel}>cancel</button>}
            </div>
        </Modal>
    );
};

export default CustomModal;
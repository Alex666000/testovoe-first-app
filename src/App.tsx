import React, {useCallback, useEffect, useState} from "react";
import BasicButton from "./components/BasicButton";
import styled from "styled-components";
import Modal from "react-modal";
import CustomModal from "./components/CustomModal/CustomModal";


export type StateType = {
    inputValue: string
}
// какой тег юзаем div
// далее этот контейнер используем как компоненту: css in js
type AppContainerPropsType = {
    padding?: string
}

const AppContainer = styled.div<AppContainerPropsType>`
  display: flex;
  padding: ${props => props.padding ? props.padding : " "};
`;

function App() {

    const [isOpen, setIsOpen] = useState(false);

    // state аналог редакса:
    const [state, setState] = useState<StateType>({
        inputValue: ""
    });

//  аналог редюсера - будет менять стейт
    const changeStateInputValue = useCallback((value: string) => {
        setState({...state, inputValue: value})
    }, [])

    // проверяем наш локальный редюсер
    useEffect(() => {
        console.log(state, "state")
    }, [state])

    const addQeustion = useCallback(() => {
        setIsOpen(true)
    }, [])

    return (
        <AppContainer padding={"50px 20px"}>
            <BasicButton text={"Добавить вопрос"} onClick={addQeustion}/>
            {/*передаем padding*/}
            <BasicButton text={"Начать текст"} padding={"0px 10px"}/>
            <CustomModal isOpen={isOpen} changeStateInputValue={changeStateInputValue}/>
        </AppContainer>
    );
}

export default App;
/*
1.11.12 мин закончили...
 */

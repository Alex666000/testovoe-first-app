import React, {useCallback, useState} from "react";
import styled from "styled-components";
import BasicButton from "./components/BasicButton";
import CustomModal from "./components/CustomModal";
import {AppDispatch, RootState, useAppDispatch, useAppSelector} from "./redux/store";
import {createQuestion} from "./redux/questionSlice";


type AppContainerPropsType = {
    marginTop: string
}

const AppContainer = styled.div<AppContainerPropsType>`
  display: flex;
  margin-top: ${props => props.marginTop ? props.marginTop : ""};
`;

function App() {
    const dispatch = useAppDispatch()

    const questionsSelector = (state: RootState) => state.questions.questions
    const questions = useAppSelector(questionsSelector)

    const [modalIsOpen, setIsOpen] = useState(false);

    // const [state, setState] = useState({
    //     initialValue: "",
    // });

    // меняем стейт - вне мбудет объект:
    /* const [state, setState] = useState({
         questions: []
         ,
     });*/

    const changeStateInputValue = useCallback((value: string) => {
        // setState({...state, initialValue: value})
        dispatch(createQuestion(value))
    }, [])

    // console.log(state)

    const addQeustion = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseModal = () => {
        setIsOpen(false)
    }


    return (
        <AppContainer marginTop={"30px"}>
            <div>
                {/*вместо console.log(state) сделаем сущность чтобы при добавлении вопроса после введения в input она отображалась в дивке*/}
                Текущий вопрос: {questions.map(el => el.question)}
            </div>
            <BasicButton text={"Добавить вопрос"} onClick={addQeustion}></BasicButton>
            <BasicButton text={"Начать тест"}></BasicButton>

            <CustomModal
                isOpen={modalIsOpen}
                // в любой модалке всегда есть submit
                submitInputValue={changeStateInputValue}
                cancelHandler={onCloseModal}/>

        </AppContainer>)
}


export default App;


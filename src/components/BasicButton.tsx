import React from "react";
import styled from "styled-components";

// styled
type StyledButtonPropsType = {
    margin?: string
}

const StyledButton = styled.button<StyledButtonPropsType>`
  margin:  ${(props) => props.margin ? props.margin : ' '};
`;

// types
type BasicButtonPropsType = {
    text: string
    // пропсы для styled делаем необязательными
    padding?: string
    onClick?: () => void
}

const BasicButton = (props: BasicButtonPropsType) => {

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.onClick && props.onClick()
    }

    return (
        <StyledButton margin={props.padding} onClick={onClickHandler}>{props.text}</StyledButton>
    );
};

export default BasicButton;
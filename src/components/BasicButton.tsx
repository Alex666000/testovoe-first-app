import React, {FC} from "react";
import styled from "styled-components";

type StyledButtonPropsType = {
    marginRight: string
}

const StyledButton = styled.button<StyledButtonPropsType>`
  margin-right: ${props => props.marginRight ? props.marginRight : ""};
`;

// button type
type BasicButtonPropsType = {
    text: string
    onClick?: () => void
}

const BasicButton: FC<BasicButtonPropsType> = ({text, onClick}) => {

    const openModalHandler = () => {
        onClick && onClick()
    }

    return (
        <StyledButton marginRight={"20px"} onClick={openModalHandler}>{text}</StyledButton>
    );
};

export default BasicButton;
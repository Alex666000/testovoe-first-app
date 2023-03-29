import styled from "styled-components";

export const Block = styled.div<any>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ? props.flexDirection : " "};
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : " "};
  align-items: ${(props) => props.alignItems ? props.alignItems : " "};
`;

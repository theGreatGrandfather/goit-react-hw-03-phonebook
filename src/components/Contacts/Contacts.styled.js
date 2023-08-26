import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap:${props => props.theme.spacing(4)};
    margin-top: ${props => props.theme.spacing(4)};;

`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.spacing(6)};
  gap: ${props => props.theme.spacing(4)};

`;
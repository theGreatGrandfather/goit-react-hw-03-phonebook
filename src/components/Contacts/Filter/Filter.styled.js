import styled from "@emotion/styled";

export const FilterInput = styled.input`
    display: flex;
    border: 2px solid blue;
    padding: 16px;
    font-size: 22px;
    border-radius: 5px;
    width: 400px;
    border: 2px solid blue;
    padding: ${props => props.theme.spacing(4)};
    font-size: ${props => props.theme.spacing(4)};
    border-radius: ${props => props.theme.spacing(3)};
` 
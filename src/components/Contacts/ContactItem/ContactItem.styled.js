import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    gap:${props => props.theme.spacing(4)};
    align-items: center;

    
`
export const ItemElement = styled.span`

`

export const DelButton = styled.button`
    display: flex;
    justify-content: center;
    border: 2px solid blue;
    padding: 10px;
    background-color:  ${props => props.theme.colors.white};
    font-size: ${props => props.theme.spacing(5)};
    border-radius: ${props => props.theme.spacing(3)};
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover,&:focus{
        background-color:  ${props => props.theme.colors.success};
    }
    cursor: pointer;
`
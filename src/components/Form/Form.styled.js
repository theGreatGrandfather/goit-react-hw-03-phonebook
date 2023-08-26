import styled from "@emotion/styled";
import { ErrorMessage, Field,Form } from 'formik';

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e2e2;
  min-width: 60%;
  gap: 30px;
  padding: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.bgc};
  border-radius: ${props => props.theme.spacing(3)};

`
export const Input = styled(Field)`
  display: flex;
  border: 2px solid blue;
  padding: ${props => props.theme.spacing(4)};
  font-size: ${props => props.theme.spacing(4)};
  width: 400px;
  border-radius: ${props => props.theme.spacing(3)};
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.spacing(6)};
  gap: ${props => props.theme.spacing(4)};

`;

export const AddBtn = styled.button`
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
`

export const StyledError = styled(ErrorMessage)`
  color: red;
`;

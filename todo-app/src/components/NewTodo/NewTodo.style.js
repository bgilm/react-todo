import styled from 'styled-components'
import Checkbox from 'material-ui/Checkbox';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin: 5px 20px 0 20px;
`
export const StyledCheckbox = styled(Checkbox)`
    width: auto !important;
`
export const StyledInput = styled.input`
  margin: 1px 5px 0 10px !important;
  border-bottom: none !important;

  :focus {
    border-bottom: none !important;
    outline: none !important;
  }
`

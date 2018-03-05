import styled from 'styled-components'

export const FooterContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 15px 10px 15px;
  align-items: center;
  color: #777;
`

export const VisibilityFilter = styled.div`
  display: flex;
  width: 180px;
  flex-direction: row;
  justify-content: space-around;
`
export const Filter = styled.span`
  border: ${props => props.isSelected ? '1px solid #D9949F' : 'none'};
  padding: 2px 5px 2px 5px;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    border: 1px solid rgba(217,148,159,0.3)
  }
`

export const Button = styled.span`
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

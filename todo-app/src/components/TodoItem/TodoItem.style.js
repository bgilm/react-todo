import styled from 'styled-components'

export const StyledSpan = styled.span`
  text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
  opacity: ${props => props.isDone ? 0.5 : 1};;
  color: rgba(0,0,0,0.87);
`
export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

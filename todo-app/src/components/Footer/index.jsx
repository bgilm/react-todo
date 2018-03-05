import React from 'react';
import {
  FooterContainer,
  VisibilityFilter,
  Filter,
  Button
} from './Footer.style'

const Footer = ({ itemsLeft, visibilityFilter, clearCompleted, setVisibilityFilter }) => {
  return (
    <FooterContainer>
      <span>{`Items left: ${itemsLeft}`}</span>
      <VisibilityFilter>
        <Filter isSelected={visibilityFilter === 'All'} onClick={() => setVisibilityFilter('All')}>All</Filter>
        <Filter isSelected={visibilityFilter === 'Active'} onClick={() => setVisibilityFilter('Active')}>Active</Filter>
        <Filter isSelected={visibilityFilter === 'Completed'} onClick={() => setVisibilityFilter('Completed')}>Completed</Filter>
      </VisibilityFilter>
      <Button onClick={() => clearCompleted()}>Clear Completed</Button>
    </FooterContainer>
  )
}

export default Footer;

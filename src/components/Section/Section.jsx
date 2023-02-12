import PropTypes from 'prop-types';
import { StyledContainer, StyledTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
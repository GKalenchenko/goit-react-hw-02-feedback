import PropTypes from 'prop-types';
import { Title, Wrapper } from './Section.styled';

export const Section = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string,
};
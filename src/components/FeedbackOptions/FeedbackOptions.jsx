import PropTypes from 'prop-types';
import { Button, ButtonList, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <ButtonList>
      <Button
        type="button"
        name={'Good'}
        onClick={({ currentTarget }) => onClick(currentTarget.name)}
      >
        {'Good'}
      </Button>{' '}
      <Button
        type="button"
        name={'Neutral'}
        onClick={({ currentTarget }) => onClick(currentTarget.name)}
        buttonType={'Neutral'}
      >
        {'Neutral'}
      </Button>{' '}
      <Button
        type="button"
        name={'Bad'}
        onClick={({ currentTarget }) => onClick(currentTarget.name)}
        buttonType={'Bad'}
      >
        {'Bad'}
      </Button>
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};

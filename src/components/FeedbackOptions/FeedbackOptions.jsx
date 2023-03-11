import PropTypes from 'prop-types';
import { Button, ButtonList, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ buttonEntries, onClick }) => {
  return (
    <ButtonList>
      {buttonEntries.map((button, idx) => (
        <ButtonWrapper key={idx}>
          <Button
            type="button"
            onClick={() => onClick(button)}
            buttonType={button[0]}
          >
            {button[0]}
          </Button>
        </ButtonWrapper>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  buttonName: PropTypes.arrayOf(PropTypes.string),
};

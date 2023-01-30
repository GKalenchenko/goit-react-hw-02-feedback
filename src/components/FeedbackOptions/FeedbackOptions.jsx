import PropTypes from 'prop-types';
import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ buttonEntries, onClick }) => {
  return (
    <ButtonList>
      {buttonEntries.map((button, idx) => (
        <Button
          key={idx}
          type="button"
          onClick={() => onClick(button)}
          buttonType={button[0]}
        >
          {button[0]}
        </Button>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  buttonName: PropTypes.arrayOf(PropTypes.string),
};

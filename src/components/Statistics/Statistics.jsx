import PropTypes from 'prop-types';
import { StatCount, StatItem, StatList } from './Statistics.styled';

export const Statistics = ({ feedback, total, positivePercentage }) => {
  const { goodFeedback, neutralFeedback, badFeedback } = feedback;
  return (
    <>
      <StatList>
        <StatItem>{`Good: ${goodFeedback}`}</StatItem>
        <StatItem>{`Neutral: ${neutralFeedback}`}</StatItem>
        <StatItem>{`Bad: ${badFeedback}`}</StatItem>
      </StatList>
      <StatCount>Total: {total}</StatCount>
      <StatCount>Positive feedback: {positivePercentage}</StatCount>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statsData: PropTypes.arrayOf(PropTypes.array),
  total: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.string,
};

import PropTypes from 'prop-types';
import { StatCount, StatItem, StatList } from './Statistics.styled';

export const Statistics = ({ {goodFeedback}, total, positivePercentage }) => {
  return (
    <>
      <StatList>
        <StatItem></StatItem>
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

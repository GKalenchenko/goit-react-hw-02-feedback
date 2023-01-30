import PropTypes from 'prop-types';
import { StatCount, StatItem, StatList } from './Statistics.styled';

export const Statistics = ({ statsData, total, positivePercentage }) => {
  return (
    <>
      <StatList>
        {statsData.map(stat => (
          <StatItem key={stat[0]}>
            {stat[0]}: {stat[1]}
          </StatItem>
        ))}
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

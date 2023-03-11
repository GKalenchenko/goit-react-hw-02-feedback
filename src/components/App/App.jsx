import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { useState } from 'react';

export const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const feedback = {
    goodFeedback,
    neutralFeedback,
    badFeedback,
  };

  const countTotalFeedback = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return `${Math.floor((goodFeedback / countTotalFeedback()) * 100)}%`;
  };

  const onClick = buttonName => {
    switch (buttonName) {
      case 'Good':
        setGoodFeedback(goodFeedback + 1);
        break;
      case 'Neutral':
        setNeutralFeedback(neutralFeedback + 1);
        break;
      case 'Bad':
        setBadFeedback(badFeedback + 1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onClick={onClick} />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            feedback={feedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      )}
    </>
  );
};

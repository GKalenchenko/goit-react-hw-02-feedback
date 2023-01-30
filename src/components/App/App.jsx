import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Component } from 'react';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => {
      return (acc += value);
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return `${Math.floor(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  }

  onClick = button => {
    this.setState(prevState => ({
      [button[0]]: this.state[button[0]] + 1,
    }));
  };

  render() {
    const BUTTON_ENTRIES = Object.entries(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            buttonEntries={BUTTON_ENTRIES}
            onClick={this.onClick}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              statsData={BUTTON_ENTRIES}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        )}
      </>
    );
  }
}

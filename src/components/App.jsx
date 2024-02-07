import { useState } from 'react';
import Feedback from './feedback/Feedback';
import Statistics from './stats/Stats';
import Notification from './Noti/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = state => {
    if (state === 'good') {
      setGood(good => good + 1);
    } else if (state === 'neutral') {
      setNeutral(neutral => neutral + 1);
    } else if (state === 'bad') {
      setBad(bad => bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100) || 0;
  };

  const btnNames = Object.keys({ good, neutral, bad });
  const totalPercentage = countPositiveFeedbackPercentage();
  return (
    <div className="App">
        <Feedback options={btnNames} onLeaveFeedback={onLeaveFeedback} />
          <Notification message="No feedback given" />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={totalPercentage}
          />   
    </div>
  );
}

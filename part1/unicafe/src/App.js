import PropTypes from 'prop-types';
import { useState } from 'react';

function Feedback() {
  // console.log(props);
  return <h1>give feedback</h1>;
}
function StatisticsLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td> {value}</td>
    </tr>
  );
}
StatisticsLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

function Statistics({ good, neutral, bad }) {
  // console.log(props);
  const total = good + neutral + bad;

  const displayAverage = () => `${+((good + bad * -1) / total)}`;
  const displayPercent = () => `${+((good / total) * 100)} %`;

  if (total === 0)
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    );

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={`${good}`} />
          <StatisticsLine text="neutral" value={`${neutral}`} />
          <StatisticsLine text="bad" value={`${bad}`} />
          <StatisticsLine text="all" value={`${total}`} />
          <StatisticsLine text="average" value={displayAverage()} />
          <StatisticsLine text="positive" value={displayPercent()} />
        </tbody>
      </table>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

function Button({ onClick, text }) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;

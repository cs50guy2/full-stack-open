import { useState } from 'react';
import { anecdoteType, buttonType, statisticsType } from './types';

function Button({ onClick, text }) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}

function Statistics({ vote }) {
  return (
    <>
      has {vote} votes <br />
    </>
  );
}

function Anecdote({ title, anecdote }) {
  return (
    <>
      <h1>{title}</h1>
      {anecdote} <br />
    </>
  );
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const getNextAnecdote = () => {
    setSelected(getRandomInt(0, anecdotes.length - 1));
  };

  const incrementVote = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  const getMostVotesIndex = () => {
    const max = Math.max(...vote);
    const index = vote.indexOf(max);
    return index;
  };

  return (
    <div>
      <Anecdote title="Anecdote of the day " anecdote={anecdotes[selected]} />
      <Statistics vote={vote[selected]} />
      <Button onClick={incrementVote} text="vote" />
      <Button onClick={getNextAnecdote} text="next anecdote" />
      <Anecdote
        title="Anecdote with most votes"
        anecdote={anecdotes[getMostVotesIndex()]}
      />
      <Statistics vote={vote[getMostVotesIndex()]} />
    </div>
  );
}

Button.propTypes = buttonType;
Statistics.propTypes = statisticsType;
Anecdote.propTypes = anecdoteType;

export default App;

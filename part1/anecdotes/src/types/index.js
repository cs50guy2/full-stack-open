import PropTypes from 'prop-types';

const { string, number, func } = PropTypes;

export const buttonType = {
  onClick: func.isRequired,
  text: string.isRequired,
};

export const statisticsType = {
  vote: number.isRequired,
};

export const anecdoteType = {
  title: string.isRequired,
  anecdote: string.isRequired,
};

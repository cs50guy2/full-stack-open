import PropTypes from 'prop-types';

const { string, shape, arrayOf, number} = PropTypes;

export const sumType = {
  sum: number.isRequired,
};
export const headerType = {
  header: string.isRequired,
};

export const partType = {
  part: shape({
    name: string.isRequired,
    exercises: number.isRequired,
    id: number.isRequired
  })
};
export const partsType = {
  parts: arrayOf(shape(partType))
}

export const courseType = {
  course: shape({
  name: string.isRequired,
  id: number.isRequired,
  parts: arrayOf(shape(partType))
  })
};



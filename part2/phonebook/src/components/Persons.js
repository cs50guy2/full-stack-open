import Name from './Name';

export default function Persons({ persons, filter }) {
  return persons
    .filter(
      (person) =>
        filter === '' ||
        person.number.toUpperCase().includes(filter.toUpperCase()) ||
        person.name.toUpperCase().includes(filter.toUpperCase())
    )
    .map((person) => {
      return (
        <Name key={person.name} name={person.name} number={person.number} />
      );
    });
}

import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import phoneBookService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('enter name');
  const [newNumber, setNewNumber] = useState('enter number');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    phoneBookService.getAll().then((initialPhoneBook) => {
      setPersons(initialPhoneBook);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    if (
      !persons.find((person) => {
        return person.name === newName;
      })
    ) {
      phoneBookService
        .create({ name: newName, number: newNumber })
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
          setMessage(`Added ${newName}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
    } else {
      if (window.confirm(`Do you want to update ${newName}?`)) {
        const id = persons.find((person) => person.name === newName).id;
        phoneBookService
          .update(id, { name: newName, number: newNumber })
          .then((updatedPerson) => {
            setPersons(
              persons.map((persons) =>
                persons.id !== id ? persons : updatedPerson
              )
            );
            setNewName('');
            setNewNumber('');
            setMessage(`Updated ${newName}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log(
              `Information for ${newName} was already removed from server`
            );
            setErrorMessage(
              `Information for ${newName} was already removed from server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            setPersons(persons.filter((n) => n.id !== id));
          });
      }
    }
  };

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    console.log('running handler name');
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    console.log('running handler number');
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    // console.log(event.target.value);
    console.log('running handler filter');
    setFilter(event.target.value);
  };
  const handleDelete = (id) => {
    const name = persons.find((n) => n.id === id).name;
    if (window.confirm(`Do you want to delete ${name}?`)) {
      phoneBookService
        .deleteId(id)
        .then(setPersons(persons.filter((n) => n.id !== id)))
        .catch((error) => {
          console.log(
            `Information for ${name} was already removed from server`
          );
          setErrorMessage(
            `Information for ${name} was already removed from server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setPersons(persons.filter((n) => n.id !== id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type="info" message={message} />
      <Notification type="error" message={errorMessage} />
      <Filter input={filter} onChange={handleFilterChange} />
      <h2>Add number</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        nameHandler={handleNameChange}
        numberHandler={handleNumberChange}
        buttonHandler={addName}
      />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} deleteHandler={handleDelete} />
    </div>
  );
};

export default App;

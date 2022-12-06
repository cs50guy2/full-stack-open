import axios from 'axios';
import { useEffect, useState } from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('effect');
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log('promise fulfilled');
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    console.log('running handler filter');
    setFilter(event.target.value);
  };

  return (
    <div>
      <Filter
        filterText="find countries"
        input={filter}
        onChange={handleFilterChange}
      />
      <Countries countries={countries} filter={filter} />
    </div>
  );
}

export default App;

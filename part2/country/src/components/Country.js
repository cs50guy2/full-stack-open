import { useState } from 'react';
import Weather from './Weather';

export default function Country({ country, hide }) {
  const [hidden, setHidden] = useState(hide);

  return (
    <div>
      {hide ? country.name.common : <h3>{country.name.common}</h3>}{' '}
      <button
        onClick={() => setHidden(!hidden)}
        style={{ display: !hide ? 'none' : 'inline-block' }}
      >
        {hidden ? 'show' : 'hide'}
      </button>
      <div style={{ display: hidden ? 'none' : 'block' }}>
        capital {country.capital[0]} <br />
        area {country.area}
        <h3>languages:</h3>
        <ul>
          {Object.values(country.languages).map((lang) => {
            return <li key={lang}>{lang}</li>;
          })}
        </ul>
        <img src={country.flags.png} width="250" height="250" alt="flag" />
        <Weather country={country} />
      </div>
    </div>
  );
}

import Country from './Country';

export default function Countries({ countries, filter }) {
  const c = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  if (c.length === 1) {
    return <Country country={c[0]} hide={false} />;
  }
  if (c.length <= 10) {
    return c.map((country) => (
      // <div key={country.name.common}>{country.name.common}</div>
      <Country key={country.name.common} country={country} hide={true} />
    ));
  }
  return <div>Too many matches, specify another filter</div>;
}
